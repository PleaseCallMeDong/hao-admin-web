// 复制剪贴板
function uiCopy(str) {
    let copyDom = document.createElement('div');
    copyDom.innerText = str;
    copyDom.style.position = 'absolute';
    copyDom.style.top = '0px';
    copyDom.style.right = '-9999px';
    document.body.appendChild(copyDom);
    //创建选中范围
    let range = document.createRange();
    range.selectNode(copyDom);
    //移除剪切板中内容
    window.getSelection().removeAllRanges();
    //添加新的内容到剪切板
    window.getSelection().addRange(range);
    //复制
    let successful = document.execCommand('copy');
    copyDom.parentNode.removeChild(copyDom);
    try {
        uiMsg({
            msg: successful ? "复制成功!" : "复制失败，请手动复制内容",
            type: successful ? 'success' : 'error'
        })
    } catch (err) {}
}

// 深拷贝
function uiDeepCopy(obj, cache = []) {
    function find(list, f) {
        return list.filter(f)[0];
    }
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const hit = find(cache, (c) => c.original === obj);
    if (hit) {
        return hit.copy;
    }
    const copy = Array.isArray(obj) ? [] : {};
    cache.push({original: obj, copy});
    Object.keys(obj).forEach((key) => {
        copy[key] = uiDeepCopy(obj[key], cache);
    });
    return copy;
}

export function localGet (key) {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value
    }
}

export function localSet (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
    window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
    const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
    return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

export const pathMap = {
    login: '登录',
    introduce: '系统介绍',
    dashboard: '大盘数据',
    add: '添加商品',
    swiper: '轮播图配置',
    hot: '热销商品配置',
    new: '新品上线配置',
    recommend: '为你推荐配置',
    category: '分类管理',
    level2: '分类二级管理',
    level3: '分类三级管理',
    good: '商品管理',
    guest: '会员管理',
    order: '订单管理',
    order_detail: '订单详情',
    account: '修改账户'
}

