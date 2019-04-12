
// import './CustomSelect.less';
class CustomSelect {
    /**
     * [{label:'label',value:0}]
     * @param {*} data 
     */
    constructor (data,width=200,height=26,maxHeight=200,itemh=24) {
        this.callBack = [];
        this._selectIndex = 0;

        this.root = document.createElement('div');
        this.root.classList.add('custom-page-select');
        this.root.innerHTML = '<div class="custom-page-display"></div><ul class="custom-page-display-ul"></ul>';

        this.dislabel = this.root.querySelector('.custom-page-display');
        this.ul = this.root.querySelector('ul');
        this.liList = [];
        this.dataList = data;
        let h = 0;
        data.forEach((element,index) => {
            let item = document.createElement('li');
            item.innerHTML = element.label;
            // item.value = item.value;
            item.order = index;
            this.liList.push(item);
            this.ul.appendChild(item);
            h += itemh;

            item.addEventListener('click',this.itemClick.bind(this));

        });
        this.ulHeight = h;
        // this.ulMaxHeight = maxHeight;
        this.ul.style.height = '0';
        this.ul.style.opacity = '0';
        this.ul.style.maxHeight = maxHeight+'px';
        if(typeof width === 'number'){
            width = width+'px';
        }
        this.ul.style.width = width;
        this.root.style.width = width;
        this.root.style.height = height+'px';
        this.dislabel.style.lineHeight = height+'px';

        this.dislabel.addEventListener('click',this.clickHandler.bind(this));
        document.addEventListener('mousedown',this.documentdownHandler.bind(this));

        this.selectedIndex = 0;
    }

    clickHandler(){
        if(parseInt(this.ul.style.height) === 0){
            this.ul.style.height = this.ulHeight+'px';
            this.ul.style.opacity = '1';
            let selfPos = this.root.getBoundingClientRect();
            let x = selfPos.x,
            y = selfPos.y+this.root.offsetHeight,
            limitW = document.body.offsetWidth,
            limitH = document.body.offsetHeight;
            x = Math.min(x,limitW - this.root.offsetWidth);
            // console.log('this.ul.offsetHeight',this.ul.offsetHeight)
            if(limitH < 100) {
                limitH = document.documentElement.clientHeight;
            }
            if(y+this.ul.offsetHeight>limitH){
                y = selfPos.y-this.ul.offsetHeight;
            }
            this.ul.style.left = x+'px';
            this.ul.style.top = y+'px';
            this.ul.style.width = this.root.offsetWidth+'px';
            this.ul.style.zIndex = this.getMaxZindex();
            document.body.appendChild(this.ul);
        }else{
            this.ul.style.height = '0';
            this.ul.style.opacity = '0';
            this.root.appendChild(this.ul);
        }
    }

    documentdownHandler(event){
        if(this.root === event.target || this.ul === event.target || this.dislabel === event.target || this.ul.contains(event.target)){
            return;
        }
        this.ul.style.height = '0';
        this.ul.style.opacity = '0';
        this.root.appendChild(this.ul);
    }

    itemClick (event) {
        let order = event.target.order || 0;
        
        this.selectedIndex = order;
        this.callBack.forEach(item =>{
            if(item.eventName === 'change'){
                item.callback(this.getValue());
            }
        });

        this.ul.style.height = '0';
        this.ul.style.opacity = '0';
        this.root.appendChild(this.ul);
    }

    get selectedIndex (){
        return this._selectIndex;
    }
    set selectedIndex (v){
        v = Math.max(v,0);
        v = Math.min(v,this.dataList.length-1);
        this.dislabel.innerHTML = this.dataList[v].label;
        this._selectIndex = v;
        this.liList.forEach(item =>{
            if(item.order === v){
                item.classList.add('selected');
            }else{
                item.classList.remove('selected');
            }
        })
    }

    getValue (){
        return this.dataList[this._selectIndex].value;
    }
    setValue (v) {
        for(let i=0;i<this.dataList.length;i++){
            if(this.dataList[i].value === v){
                this.selectedIndex = i;
                break;
            }
        }
    }

    on (eventName,fun) {
        this.callBack.push({
            eventName:eventName,
            callback:fun
        });
    }

    off (eventName,fun) {
        for(let i=0;i<this.callBack.length;i++){
            if(this.callBack[i].eventName === eventName && this.callBack[i].callback === fun){
                this.callBack.splice(i,1);
                i--;
            }
        }
    }

    //返回body最大的z-index
    getMaxZindex() {
        let elementObj = document.body;
        //取得容器节点下第一层所有节点
        let childNodes = elementObj.children || elementObj.childNodes;
        let zIndex = 0;
        for (let i = 0; i < childNodes.length; i++) {
            let node = childNodes[i];
            let ti1 = parseInt(this.getClass(node, "z-index"));
            let ti2 = parseInt(node.style.zIndex);
            let ti = ti2 || ti1;
            if (isNaN(ti)) continue;
            if (ti > zIndex) zIndex = ti;
        }
        zIndex += 10;
        return zIndex;
    }

    getClass(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name]; //IE下获取非行间样式
        } else {
            return getComputedStyle(obj, false)[name]; //FF、Chorme下获取非行间样式
        }
    }
}

export default CustomSelect;