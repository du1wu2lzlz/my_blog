
 var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
        function parseQueryString(url){
             var params = {};
             var arr = url.split("?");
             if(arr.length <= 1){
                    return params;
             }
             arr = arr[1].split("&");
             for(var i =0;i<arr.length ;i++){
                 var a = arr[i].split("=");
                 params[a[0]] = a[1];
             }
             return params;
             /*
                hash        设置或返回从井号 (#) 开始的 URL（锚）。
                host        设置或返回主机名和当前 URL 的端口号。
                hostname    设置或返回当前 URL 的主机名。
                href        设置或返回完整的 URL。
                pathname    设置或返回当前 URL 的路径部分。
                port        设置或返回当前 URL 的端口号。
                protocol    设置或返回当前 URL 的协议。
                search      设置或返回从问号 (?) 开始的 URL（查询部分）
             */
        }
        console.info(window.location.search);//?key0=0&key1=1&key2=2 
        console.info("解析http://witmax.cn/index.php?key0=0&key1=1&key2=2");
        console.info(parseQueryString(url));
        console.info("源码parseQueryString");
