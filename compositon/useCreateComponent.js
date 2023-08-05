export default async function useCreateComponent(isLoadingRef) {
    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // // script.id = "changyan_mobile_js"
    // script.src = "https://cy-cdn.kuaizhan.com/upload/changyan.js";
    // document.body.appendChild(script);

    const appid = 'cyw09aFUw';
    const conf = 'prod_0fc19663fd404071661aa209adc87d12';

    const loadJs = function(d, a) {
        const c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
        console.log(c);
        let b = document.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.setAttribute("charset", "UTF-8");
        b.setAttribute("src", d);
        if (typeof a === "function") {
            if (window.attachEvent) {
                b.onreadystatechange = function() {
                    var e = b.readyState;
                    if (e === "loaded" || e === "complete") {
                        b.onreadystatechange = null;
                        a();
                    }
                    isLoadingRef.value = false;
                    // console.log(isLoadingRef.value);
                }
            } else {
                b.onload = a;
                isLoadingRef.value = false;
                // console.log(isLoadingRef.value);
            }
        }
        c.appendChild(b)
    };
    loadJs("https://cy-cdn.kuaizhan.com/upload/changyan.js", function() { window.changyan.api.config({ appid: appid, conf: conf }) });;
}