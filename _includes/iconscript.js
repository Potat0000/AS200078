const icons = {
    "globe": "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z",
    "link": "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",
    {% for icon in site.data.config.icon %}
    "{{ icon[0] }}": "{{ icon[1] }}",
    {% endfor %}
};

function createSVG(icon) {
    var svgObj = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    svgObj.setAttribute('aria-hidden', 'true');
    svgObj.setAttribute('focusable', 'false');
    svgObj.setAttribute('viewBox', '0 0 512 512');
    var pathObj = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathObj.setAttribute("fill", "currentColor");
    pathObj.setAttribute("d", icons[icon]);
    svgObj.appendChild(pathObj);
    return svgObj;
}

const iconObjs = document.getElementsByClassName("icon");
for (let i = 0; i < iconObjs.length; i++) {
    var icon = "globe";
    var classes = iconObjs[i].className.split(" ");
    for (let j = 0; j < classes.length; j++) {
        if (classes[j].startsWith("icon-")) {
            tmp = classes[j].substring(5);
            if (tmp in icons) {
                icon = tmp;
                break;
            }
        }
    }
    var svgObj = createSVG(icon);
    svgObj.classList.add('icon');
    iconObjs[i].parentNode.replaceChild(svgObj, iconObjs[i]);
}

const linkObjs = document.querySelectorAll('main a');
for (let i = 0; i < linkObjs.length; i++) {
    var svgObj = createSVG('link');
    svgObj.classList.add('link');
    linkObjs[i].appendChild(svgObj);
}
