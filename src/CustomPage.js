
import htmlStr from './Main.html';
import CustomSelect from './CustomSelect';
import './CustomPage.less';
class CustomPage{
    constructor(eacharr,maxNum,callback){

        let tempdiv = document.createElement('div');
        tempdiv.innerHTML = htmlStr;
        this.root = tempdiv.querySelector('.custom-page-box');
        
        this.curPage = 0;
        this.totalNum = 0;

        let _eacharr = eacharr || [10,20,30,40];
        let eachConfig = [];
        _eacharr.forEach(element => {
            eachConfig.push({
                label: element+'条/页',
                value: element
            })
        });
        this.rowNum = eachConfig[0].value;
        this.maxNum = maxNum || 5;
        this.callback = callback;

        this.ulPage = this.root.querySelector('.cpage-ul');
        let selectbox = this.root.querySelector('.cpage-select-box');
        this.select = new CustomSelect(eachConfig,80);
        selectbox.appendChild(this.select.root);
        this.inputPage = this.root.querySelector('.cpage-goto-input');

        this.ulPage.addEventListener('click',this.ulPageClickHandler.bind(this));
        this.select.on('change',this.selectChange.bind(this));
        this.inputPage.addEventListener('keypress',this.inputKeydownHandler.bind(this));
        // this.showOptionItem();
    }

    /** 选择组件改变 */
    selectChange () {
        // console.log(sfsdfsf)
        // console.log(this.select.getValue())
        this.rowNum = this.select.getValue();
        if(this.callback){
            this.callback(this.curPage,this.rowNum);
        }
    }

    /** 输入页数确定 */
    inputKeydownHandler (event) {
        if(event.keyCode == "13"){
            let p = parseInt(this.inputPage.value);
            if(isNaN(p)) p = 1;
            this.curPage = p;
            this.setPage(this.curPage,this.totalNum);
            this.inputPage.blur();
            if(this.callback){
                this.callback(this.curPage,this.rowNum);
            }
        }
    }

    /** 设置rowNum */
    setRowPage(row){
        this.select.setValue(row);
        this.rowNum = this.select.getValue();
    }
    /**
     * 设置当前页和总条数
     */
    setPage(curPage,total=0){
        this.totalNum = total;
        let maxPage = Math.ceil(this.totalNum/this.rowNum);
        maxPage = Math.max(1,maxPage);
        let minPage = 1;
        curPage = Math.min(curPage,maxPage);
        curPage = Math.max(curPage,minPage);
        this.curPage = curPage;

        let p = this.curPage;
        let pn = maxPage;
        // if(p < 1) p = 1;
        //     if(pn < 1) pn = 1;
        //     if(pn < p) p = pn;
    
        //     this.p = p;
        //     this.pn = pn;
        // console.log(p,pn,'asdfsafaslfkdjsa;fdljk;',this.rowNum)
    
        let btntypes = [];
        // if(p > 1){
        //     btntypes.push({
        //         order:0,
        //         type:'pre',
        //         isCur: false,
        //         // isDisable: false
        //     })
        // }
        btntypes.push({
            order:0,
            type:'pre',
            isCur: false,
            isDisable: p===1
        })
        let start = p - ~~(this.maxNum/2);
        let end = p + ~~(this.maxNum/2);
        if(start < 1){
            end += 1 - start;
            start = 1;
        }
        if(start > pn - (this.maxNum -1)){
            start = pn - (this.maxNum -1);
            if(start < 1){
                end += 1 - start;
                start = 1;
            }
        } 
        if(end > pn) end = pn;
        for(var i=start;i<=end;i++){
            if(i == start){
                if(pn > this.maxNum && start > 1){
                    btntypes.push({
                        type:'item',
                        order:1,
                        isCur:p==1
                    },{
                        type:'point',
                        order:0,
                        isCur:false
                    });
                    continue;
                }
            }
            if(i == end){
                if(pn > this.maxNum && end < pn){
                    btntypes.push({
                        type:'point',
                        order:0,
                        isCur:false
                    },{
                        type:'item',
                        order:pn,
                        isCur:p==pn
                    });
                    continue;
                }
            }
            btntypes.push({
                type:'item',
                order:i,
                isCur:i==p
            });
        }
        // if(p < pn){
        //     btntypes.push({
        //         type:'next',
        //         order:0,
        //         isCur:false
        //     });
        // } 
        btntypes.push({
            type:'next',
            order:0,
            isCur:false,
            isDisable: p===pn
        });
        // console.log(btntypes);
        this.inputPage.value = this.curPage;
        this.ulPage.innerHTML = '';
        for(let i=0;i<btntypes.length;i++){
            let v = btntypes[i];
            let li_item = document.createElement('li');
            let span = document.createElement('span');
            li_item.appendChild(span);
            if(v.isDisable) li_item.classList.add('cpage-item-disabled');
            if(v.type === 'pre'){
                li_item.classList.add('cpage-pre');
                li_item.setAttribute('title','上一页');
            }else if(v.type === 'next'){
                li_item.classList.add('cpage-next');
                // if(v.isDisable) li_item.classList.add('cpage-item-disabled');
                li_item.setAttribute('title','下一页');
            }else if(v.type === 'point'){
                li_item.classList.add('cpage-point');
                span.innerHTML = '...';
            }else if(v.type === 'item'){
                li_item.classList.add('cpage-item');
                if(v.isCur) li_item.classList.add('cpage-item-selected');
                span.innerHTML = v.order;
                li_item.setAttribute('title',v.order);
            }
            li_item.pageOrder = v.order;
            li_item.pageType = v.type;
            li_item.isDisable = !!v.isDisable;
            this.ulPage.appendChild(li_item);
        }
    }

    /**
     * ulPage单击
     */
    ulPageClickHandler(event){
        let li_item = event.target;
        if(li_item.isDisable) return;
        let tempPage = this.curPage;
        if(li_item.pageType === 'item'){
            tempPage = li_item.pageOrder;
        }else if(li_item.pageType === 'pre'){
            tempPage--;
        }else if(li_item.pageType === 'next'){
            tempPage++;
        }
        if(tempPage !== this.curPage){
            this.curPage = tempPage;
            this.setPage(this.curPage,this.totalNum);
            if(this.callback){
                this.callback(this.curPage,this.rowNum);
            }
        }
    }
    // setEachConfig(arr){
    //     let configarr = arr || [];
    //     let temparr = [];
    //     configarr.forEach(element => {
    //         temparr.push({
    //             label: element+'条/每页',
    //             value: element
    //         })
    //     });
    //     if(temparr.length>0){
    //         this.eachConfig = temparr;
    //         this.showOptionItem();
    //     }
    // }

    // /**设置选择条数值 */
    // setEachOrder (order) {
    //     this.selectOrder = order;
    //     this.selectOrder = Math.min(this.selectOrder,this.eachConfig.length-1);
    //     this.selectOrder = Math.max(this.selectOrder,0);
    //     let v = this.eachConfig[this.selectOrder];
    //     this.uldisplay.innerHTML = v.label;
    // }

    // /**渲染选择条数例表 */
    // showOptionItem (){
    //     for(let i=0;i<this.ulSelect.childNodes.length;i++){
    //         this.ulSelect.childNodes[i].removeEventListener('click',this.select_li_item_click);
    //     }
    //     this.ulSelect.innerHTML = '';
    //     this.eachConfig.forEach((item,index)=>{
    //         let li_item = document.createElement('li');
    //         li_item.innerHTML = item.label;
    //         li_item.order = index;
    //         li_item.sValue = item.value;
    //         li_item.addEventListener('click',this.select_li_item_click);

    //         this.ulSelect.appendChild(li_item);
    //     })

    //     this.setEachOrder(0);
    // }

    // /**
    //  * 选择条数单击事件
    //  */
    // select_li_item_click(event){
    //     let li_item = event.currentTarget || event.target;
    //     console.log(li_item.order,li_item.sValue)
    //     this.setEachOrder(li_item.order);
    // }
}
export default CustomPage;