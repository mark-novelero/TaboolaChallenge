console.log('connected')
let main = document.querySelector(".widget") 

const widgetsData = {
    "user": {
        "session": "v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB"
    },
    "externalVariant": "default",
    "placements": [
        {
            "name": "Below Article Thumbnails",
            "id": "__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79__~~V1~~-7423207774575853532~~BukV1Lx1pmjR5nycND7W2bBnV6lRbj3gnL-sDEwyggzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RIe6cet-kadrzDokBfOqddcud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIcDTw_EuBQzmLyX0S7T47Wzp4oitOheGnIhn5pISXNVTffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg,~~V1~~7326088570664484748~~FCavnqow6ZTQzQu8zybca_bdI5X25T4DvDBp6T9v6jfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RI-_c6EE_4SfYnRgFjxj3Z8ud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIRd7_pCTCf5s60mWbqCx1yy6BNvg5nHrTTIgNLUQz0IHwVW8HcQAAvG359pThwCE9MO7Tswj5WH4cylUjQLFLHQ,~~V1~~-5316402727423402948~~KJL__RHD8PBg0PAqzwOkEaIn0ej6K0RczM_wxhzeikLTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RKIYP1uMJVL0ppThp1NudDSud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIAwpfvaR9LOKpi_KvsudOm1JJ_zXMgHB8wBa7niGO4CjffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg,~~V1~~9110488000301351715~~SLJCkTJse72YLOcmtjA8vfakSuTJJNq4YCY-inHeg7gndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5FLbM-un5piuK6baaeciz8ngSYXQC9qGlDhCMH57wBzRCsqqaoBItWtS003GzvVh5rbEZjsPQxrZ2eDoLcOLueT_mC42j0IvukpUxZbqZDZ8pr43AfzWL_nA_cXmQwbOHWJA7xXYHW09uPaHSS7T3evmDIhCreX2gYPy11UC2512ZS3l1B0ocNIP4hE4Qbmsp,~~V1~~-4311105165233973189~~QuKGH-OlQuD9GXPdsAxqc0gmsIgCMF1koHnDAopCaOzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RLHX0KYJaqQKaASmpl4_HFCud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIFmuNeQeG4FgAIGceeyU10Nzd-NSQm64r6-_0jSuGEZHffknJSmgNBa64uLX4M24KPpWxXsjB9zkQ_MW0H5Sp2g,~~V1~~-458049688743607893~~hOPtk7xlmCZ0bOnxSzhM_KRZo0a3ezf1uZYV7oHu0lfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RJ0vg9TcmopvCyd0U6NN53zud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIuatOME6ZVkI_QmDUC5O0fBXDWWjOxhg--2YqQDAxSwLffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg__text,photo,photo,photo,text,text",
            "ui": "rest-api",
            "list": [
                {
                    "type": "TEXT",
                    "name": "Which Birth Control Method Is Best For You?",
                    "created": "Fri, 27 Aug 2021 16:10:44 UTC",
                    "branding": "HealthCentral",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2F2be81d2948e85a0bcfa27561183541af.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "health"
                    ],
                    "id": "~~V1~~-7423207774575853532~~BukV1Lx1pmjR5nycND7W2bBnV6lRbj3gnL-sDEwyggzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RIe6cet-kadrzDokBfOqddcud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIcDTw_EuBQzmLyX0S7T47Wzp4oitOheGnIhn5pISXNVTffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E-7423207774575853532%7E%7EBukV1Lx1pmjR5nycND7W2bBnV6lRbj3gnL-sDEwyggzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RIe6cet-kadrzDokBfOqddcud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIcDTw_EuBQzmLyX0S7T47Wzp4oitOheGnIhn5pISXNVTffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg&item.type=text&sig=da4d9b5bd216588059948870d0f13288f27d0a8881ba&redir=https%3A%2F%2Fwww.healthcentral.com%2Fslideshow%2Fchoosing-the-best-birth-control-method-for-you%3Fap%3D105%26pb%3Dapitestaccount%26pid%3D1155087%26aid%3D12298939%0A&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                },
                {
                    "type": "PHOTO",
                    "name": "This house is a mere 32 m2, but it is fully equipped",
                    "created": "Thu, 25 Mar 2021 10:32:20 UTC",
                    "branding": "Thegreatestlists",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2F732425e1db3dc7073676775cbef6f8ac.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "entertainment"
                    ],
                    "id": "~~V1~~7326088570664484748~~FCavnqow6ZTQzQu8zybca_bdI5X25T4DvDBp6T9v6jfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RI-_c6EE_4SfYnRgFjxj3Z8ud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIRd7_pCTCf5s60mWbqCx1yy6BNvg5nHrTTIgNLUQz0IHwVW8HcQAAvG359pThwCE9MO7Tswj5WH4cylUjQLFLHQ",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E7326088570664484748%7E%7EFCavnqow6ZTQzQu8zybca_bdI5X25T4DvDBp6T9v6jfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RI-_c6EE_4SfYnRgFjxj3Z8ud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIRd7_pCTCf5s60mWbqCx1yy6BNvg5nHrTTIgNLUQz0IHwVW8HcQAAvG359pThwCE9MO7Tswj5WH4cylUjQLFLHQ&item.type=photo&sig=af8c38eb06b6e8a1067243bea7092334211c0e094f27&redir=https%3A%2F%2Fthegreatestlists.com%2Fen%2F2019%2F12%2Fdo-you-like-beautiful-interiors-check-out-this-house%2F%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26utm_campaign%3DTBH22DesktopUSA%23tblciGiDmLBb1NwIck6N6low-oZSLrdl-0CsoNY8-5lL5oaC1pyCw00goppO6zM6T0YCwAQ&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                },
                {
                    "type": "PHOTO",
                    "name": "An Engineer Turned a Boeing Airplane Into His Home",
                    "created": "Tue, 19 Oct 2021 14:52:02 UTC",
                    "branding": "virallyworld.com",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fbcfdb738671cab40ffa7e2b18517793a.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "entertainment"
                    ],
                    "id": "~~V1~~-5316402727423402948~~KJL__RHD8PBg0PAqzwOkEaIn0ej6K0RczM_wxhzeikLTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RKIYP1uMJVL0ppThp1NudDSud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIAwpfvaR9LOKpi_KvsudOm1JJ_zXMgHB8wBa7niGO4CjffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E-5316402727423402948%7E%7EKJL__RHD8PBg0PAqzwOkEaIn0ej6K0RczM_wxhzeikLTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RKIYP1uMJVL0ppThp1NudDSud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIAwpfvaR9LOKpi_KvsudOm1JJ_zXMgHB8wBa7niGO4CjffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg&item.type=photo&sig=4ce363af55f3cf84f71e6c49ae617e9b298063c66185&redir=https%3A%2F%2Fvirallyworld.com%2Fthis-man-turned-an-airplane-into-his-home-and-the-inside-looks-pretty-special%2F%3Futm_source%3Dapitestaccount%26utm_medium%3Dblog.taboola.com%26utm_campaign%3DOTH-ADV34-this-man-turned-an-airplane-into%26tblci%3DGiDmLBb1NwIck6N6low-oZSLrdl-0CsoNY8-5lL5oaC1pyDB31Iordf-hZXAjelP%23tblciGiDmLBb1NwIck6N6low-oZSLrdl-0CsoNY8-5lL5oaC1pyDB31Iordf-hZXAjelP&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                },
                {
                    "type": "PHOTO",
                    "name": "Always Place A Bag On Your Car Mirror When Traveling Alone, Here's The Reason",
                    "created": "Tue, 03 Aug 2021 21:34:37 UTC",
                    "branding": "Articlesmansion",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fe0a7d518d44d5e32bc99b46771bd3529.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "autos"
                    ],
                    "id": "~~V1~~9110488000301351715~~SLJCkTJse72YLOcmtjA8vfakSuTJJNq4YCY-inHeg7gndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5FLbM-un5piuK6baaeciz8ngSYXQC9qGlDhCMH57wBzRCsqqaoBItWtS003GzvVh5rbEZjsPQxrZ2eDoLcOLueT_mC42j0IvukpUxZbqZDZ8pr43AfzWL_nA_cXmQwbOHWJA7xXYHW09uPaHSS7T3evmDIhCreX2gYPy11UC2512ZS3l1B0ocNIP4hE4Qbmsp",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E9110488000301351715%7E%7ESLJCkTJse72YLOcmtjA8vfakSuTJJNq4YCY-inHeg7gndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5FLbM-un5piuK6baaeciz8ngSYXQC9qGlDhCMH57wBzRCsqqaoBItWtS003GzvVh5rbEZjsPQxrZ2eDoLcOLueT_mC42j0IvukpUxZbqZDZ8pr43AfzWL_nA_cXmQwbOHWJA7xXYHW09uPaHSS7T3evmDIhCreX2gYPy11UC2512ZS3l1B0ocNIP4hE4Qbmsp&item.type=photo&sig=b7a2407d3bd7ddbed5b9b80f4642dc82f69a01905a04&redir=https%3A%2F%2Frfvtgb.articlesmansion.com%2Fworldwide%2Flifesa-ta%3Futm_medium%3Dtaboola%26utm_source%3Dtaboola%26utm_campaign%3Dta-am-lifesa11-bc3-pv-s-des-us-sg-29101p%26utm_term%3Dapitestaccount%26utm_bid%3D7an3O3iT2bGgnLVFw44MVtSFWW6BcOx0GkfcXEUsrXE%3D&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                },
                {
                    "type": "TEXT",
                    "name": "Foundation Leak Repair Cost In Mableton May Surprise You",
                    "created": "Sat, 30 Oct 2021 07:06:36 UTC",
                    "branding": "Structural Foundation | Search Ads",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fb8f7fc0fc1455559d179d2de2469fdfa.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "home"
                    ],
                    "id": "~~V1~~-4311105165233973189~~QuKGH-OlQuD9GXPdsAxqc0gmsIgCMF1koHnDAopCaOzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RLHX0KYJaqQKaASmpl4_HFCud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIFmuNeQeG4FgAIGceeyU10Nzd-NSQm64r6-_0jSuGEZHffknJSmgNBa64uLX4M24KPpWxXsjB9zkQ_MW0H5Sp2g",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E-4311105165233973189%7E%7EQuKGH-OlQuD9GXPdsAxqc0gmsIgCMF1koHnDAopCaOzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RLHX0KYJaqQKaASmpl4_HFCud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIFmuNeQeG4FgAIGceeyU10Nzd-NSQm64r6-_0jSuGEZHffknJSmgNBa64uLX4M24KPpWxXsjB9zkQ_MW0H5Sp2g&item.type=text&sig=8f9a3aeb3c282db00e5f096a7984230a39d543babb9e&redir=http%3A%2F%2Ffetch-structure.fyi%2F%3Fref%3Dtaboola-apitestaccount%26sub_id%3Dbre879-vedawares-str-Oct%26compkey%3DFoundation%2520Leak%2520Repair%2520%257B%257Bcity%257D%257D%26tbid%3D1160877%26tbland%3DLand%26tbserp%3DSearch%26tbclick%3DGadclick%26rskey%3DFoundation%2BLeak%2BRepair%2BCost%2BIn%2BMableton%2BMay%2BSurprise%2BYou%23tblciGiDmLBb1NwIck6N6low-oZSLrdl-0CsoNY8-5lL5oaC1pyCt7UYosYSuue-U9flS&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                },
                {
                    "type": "TEXT",
                    "name": "10 Early Signs of Lung Cancer",
                    "created": "Tue, 02 Nov 2021 19:48:42 UTC",
                    "branding": "Mixsilk_",
                    "duration": 0,
                    "views": 0,
                    "thumbnail": [
                        {
                            "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fbdf7e75778cbe6fb995bc51bd979f553.jpg",
                            "width": 640,
                            "height": 480
                        }
                    ],
                    "categories": [
                        "health"
                    ],
                    "id": "~~V1~~-458049688743607893~~hOPtk7xlmCZ0bOnxSzhM_KRZo0a3ezf1uZYV7oHu0lfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RJ0vg9TcmopvCyd0U6NN53zud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIuatOME6ZVkI_QmDUC5O0fBXDWWjOxhg--2YqQDAxSwLffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg",
                    "origin": "SPONSORED",
                    "url": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&item.id=%7E%7EV1%7E%7E-458049688743607893%7E%7EhOPtk7xlmCZ0bOnxSzhM_KRZo0a3ezf1uZYV7oHu0lfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RJ0vg9TcmopvCyd0U6NN53zud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIuatOME6ZVkI_QmDUC5O0fBXDWWjOxhg--2YqQDAxSwLffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg&item.type=text&sig=a23e7bdf88f81090ebb056036b126f31c245580e2321&redir=https%3A%2F%2Fmixsilk.com%2F10-early-signs-of-lung-cancer%2F%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%23tblciGiDmLBb1NwIck6N6low-oZSLrdl-0CsoNY8-5lL5oaC1pyDZ6U8oweeKiPPx5Y7sAQ&ui=14A7B4BB0B5B63781A90BE1B0F5B6019&cpb=GAEgnP__________ASoZdXMudGFib29sYXN5bmRpY2F0aW9uLmNvbTIJd2F0ZXIxMjQ1OICW-sMBQJGkDkjzwg5Q56rbA1iMBGMI1xYQ1R8YI2RjCO3__________wEQ7f__________ARgTZGMI3AoQoBAYFmRjCNIDEOAGGAhkYwiWFBCdHBgYZGMI9BQQnh0YH2RqIGE1NThlNzc2M2Q2MTQ5MDJhMzY4OWM2OWIyM2MyNWE3eAGAAQKIAf_oGw"
                }
            ],
            "events": {
                "available": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-available?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79__%7E%7EV1%7E%7E-7423207774575853532%7E%7EBukV1Lx1pmjR5nycND7W2bBnV6lRbj3gnL-sDEwyggzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RIe6cet-kadrzDokBfOqddcud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIcDTw_EuBQzmLyX0S7T47Wzp4oitOheGnIhn5pISXNVTffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg%2C%7E%7EV1%7E%7E7326088570664484748%7E%7EFCavnqow6ZTQzQu8zybca_bdI5X25T4DvDBp6T9v6jfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RI-_c6EE_4SfYnRgFjxj3Z8ud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIRd7_pCTCf5s60mWbqCx1yy6BNvg5nHrTTIgNLUQz0IHwVW8HcQAAvG359pThwCE9MO7Tswj5WH4cylUjQLFLHQ%2C%7E%7EV1%7E%7E-5316402727423402948%7E%7EKJL__RHD8PBg0PAqzwOkEaIn0ej6K0RczM_wxhzeikLTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RKIYP1uMJVL0ppThp1NudDSud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIAwpfvaR9LOKpi_KvsudOm1JJ_zXMgHB8wBa7niGO4CjffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg%2C%7E%7EV1%7E%7E9110488000301351715%7E%7ESLJCkTJse72YLOcmtjA8vfakSuTJJNq4YCY-inHeg7gndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5FLbM-un5piuK6baaeciz8ngSYXQC9qGlDhCMH57wBzRCsqqaoBItWtS003GzvVh5rbEZjsPQxrZ2eDoLcOLueT_mC42j0IvukpUxZbqZDZ8pr43AfzWL_nA_cXmQwbOHWJA7xXYHW09uPaHSS7T3evmDIhCreX2gYPy11UC2512ZS3l1B0ocNIP4hE4Qbmsp%2C%7E%7EV1%7E%7E-4311105165233973189%7E%7EQuKGH-OlQuD9GXPdsAxqc0gmsIgCMF1koHnDAopCaOzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RLHX0KYJaqQKaASmpl4_HFCud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIFmuNeQeG4FgAIGceeyU10Nzd-NSQm64r6-_0jSuGEZHffknJSmgNBa64uLX4M24KPpWxXsjB9zkQ_MW0H5Sp2g%2C%7E%7EV1%7E%7E-458049688743607893%7E%7EhOPtk7xlmCZ0bOnxSzhM_KRZo0a3ezf1uZYV7oHu0lfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RJ0vg9TcmopvCyd0U6NN53zud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIuatOME6ZVkI_QmDUC5O0fBXDWWjOxhg--2YqQDAxSwLffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg__text%2Cphoto%2Cphoto%2Cphoto%2Ctext%2Ctext&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&view.external-id=a558e7763d614902a3689c69b23c25a7",
                "visible": "https://api.taboola.com/2.0/json/apitestaccount/recommendations.notify-visible?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__4102bdf90b2e779276c8b7d8b3b394fe__1eaed1ab104d1e3400e039ab1b830c79__%7E%7EV1%7E%7E-7423207774575853532%7E%7EBukV1Lx1pmjR5nycND7W2bBnV6lRbj3gnL-sDEwyggzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RIe6cet-kadrzDokBfOqddcud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIcDTw_EuBQzmLyX0S7T47Wzp4oitOheGnIhn5pISXNVTffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg%2C%7E%7EV1%7E%7E7326088570664484748%7E%7EFCavnqow6ZTQzQu8zybca_bdI5X25T4DvDBp6T9v6jfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RI-_c6EE_4SfYnRgFjxj3Z8ud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIRd7_pCTCf5s60mWbqCx1yy6BNvg5nHrTTIgNLUQz0IHwVW8HcQAAvG359pThwCE9MO7Tswj5WH4cylUjQLFLHQ%2C%7E%7EV1%7E%7E-5316402727423402948%7E%7EKJL__RHD8PBg0PAqzwOkEaIn0ej6K0RczM_wxhzeikLTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RKIYP1uMJVL0ppThp1NudDSud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIAwpfvaR9LOKpi_KvsudOm1JJ_zXMgHB8wBa7niGO4CjffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg%2C%7E%7EV1%7E%7E9110488000301351715%7E%7ESLJCkTJse72YLOcmtjA8vfakSuTJJNq4YCY-inHeg7gndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcV7JbGFbjtizQN29Zpin8p1JlawpbYFtoRw_FVSAoDPy8yoVX_ZV1DUzrU9mgEqIxVpt34vkyVLCqQj-j_6Ik-WFwt9_72reDSrMsTKuuUo5FLbM-un5piuK6baaeciz8ngSYXQC9qGlDhCMH57wBzRCsqqaoBItWtS003GzvVh5rbEZjsPQxrZ2eDoLcOLueT_mC42j0IvukpUxZbqZDZ8pr43AfzWL_nA_cXmQwbOHWJA7xXYHW09uPaHSS7T3evmDIhCreX2gYPy11UC2512ZS3l1B0ocNIP4hE4Qbmsp%2C%7E%7EV1%7E%7E-4311105165233973189%7E%7EQuKGH-OlQuD9GXPdsAxqc0gmsIgCMF1koHnDAopCaOzTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RLHX0KYJaqQKaASmpl4_HFCud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIFmuNeQeG4FgAIGceeyU10Nzd-NSQm64r6-_0jSuGEZHffknJSmgNBa64uLX4M24KPpWxXsjB9zkQ_MW0H5Sp2g%2C%7E%7EV1%7E%7E-458049688743607893%7E%7EhOPtk7xlmCZ0bOnxSzhM_KRZo0a3ezf1uZYV7oHu0lfTxvAnL2wqac4MyzR7uD46gj3kUkbS3FhelBtnsiJV6MhkDZRZzzIqDobN6rWmCPA3hYz5D3PLat6nhIftiT1lwdxwdlxkeV_Mfb3eos_TQavImGhxk0e7psNAZxHJ9RJ0vg9TcmopvCyd0U6NN53zud1li6AwmI8uLqvfe4IKLDh7NiZRV9Euwqp4-emT0v8XLdTNqPPXwJJEtNohG3CIuatOME6ZVkI_QmDUC5O0fBXDWWjOxhg--2YqQDAxSwLffknJSmgNBa64uLX4M24KLcXaOtFajM1P84lHvSltsg__text%2Cphoto%2Cphoto%2Cphoto%2Ctext%2Ctext&response.session=v2_d1153892453ddba25274cc2dea5c2191_14A7B4BB0B5B63781A90BE1B0F5B6019_1636059098_1636059098_CNawjgYQj8BGGNmplN33-sODFyABKAMw4QE4kaQOQPPCDkjnqtsDUIwEWABgoB9okN3uttfUr6LTAXAB&view.external-id=a558e7763d614902a3689c69b23c25a7&ppb=CA8"
            }
        }
    ]
}
    
const fakeData = [{name: "mark"}, {name:"bill"}]
const widgetElements = widgetsData.placements.pop().list
console.log(widgetElements)

widgetElements.forEach(element => {
    console.log(element)
    renderWidgetElement(element)
})


function renderWidgetElement(element){
    
    console.log(element)

    let elementDiv = document.createElement("div")
    elementDiv.className = "widget-element-div"

    let elementImg = document.createElement("img")
    elementImg.className = "element-img"
    const photoUrl = element.thumbnail.pop().url
    elementImg.src = photoUrl

    let elementTitleH2 = document.createElement("h2")
    elementTitleH2.innerText = element.name

    let branding = document.createElement("p")
    branding.innerText = element.branding

    elementDiv.append(elementImg, elementTitleH2, branding)
  
    main.append(elementDiv)
}