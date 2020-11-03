(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{358:function(s,a,n){"use strict";n.r(a);var t=n(35),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ul",[n("li",[s._v("yum에는 설치가능한 JDK가 1.8까지만 존재하기 때문에 JDK 11을 설치하기 위해선 다른 방법을 이용해야합니다.\n"),n("ul",[n("li",[s._v("Amazon에서 제공하는 OpenJDK인 Amazon Coretto를 다운받아 간편하게 설치할 수 있습니다.")])])])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum list java*jdk-devel "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 설치 가능한 jdk 확인")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java-1.6.0-openjdk-devel.x86_64                                       1:1.6.0.41-1.13.13.1.77.amzn1                                       amzn-main")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java-1.7.0-openjdk-devel.x86_64                                       1:1.7.0.261-2.6.22.1.83.amzn1                                       amzn-updates")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java-1.8.0-openjdk-devel.x86_64                                       1:1.8.0.252.b09-2.51.amzn1                                          amzn-updates")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"jdk-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk-설치"}},[s._v("#")]),s._v(" JDK 설치")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aws coreetto 다운로드")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://corretto.aws/downloads/latest/amazon-corretto-11-x64-linux-jdk.rpm -o jdk11.rpm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdk11 설치")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum localinstall jdk11.rpm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdk version 선택")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/sbin/alternatives --config java\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java 버전 확인")]),s._v("\njava --version\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 다운받은 설치키트 제거")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf jdk11.rpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"이전-버전-제거하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#이전-버전-제거하기"}},[s._v("#")]),s._v(" 이전 버전 제거하기")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum list installed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum 설치 리스트 확인")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java-1.8.0-openjdk-headless.x86_64    1:1.8.0.222.b10-0.47.amzn1   @amzn-updates")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java-11-amazon-corretto-devel.x86_64  1:11.0.7.10-1                installed")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove java-1.8.0-openjdk-headless.x86_64 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("jdk 설치 목록에서 버전을 확인한 후 위와 같이 제거할 수 있습니다.")])]),s._v(" "),n("h2",{attrs:{id:"참고자료"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[s._v("#")]),s._v(" 참고자료")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("AWS Corretto JDK List"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);