(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{378:function(s,t,a){"use strict";a.r(t);var n=a(35),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-7-캡슐화"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-7-캡슐화"}},[s._v("#")]),s._v(" Chapter 7. 캡슐화")]),s._v(" "),a("ul",[a("li",[s._v("클래스는 본래 정보를 숨기는 용도로 설계되었다.")]),s._v(" "),a("li",[s._v("여러 함수를 클래스로 묶기로 클래스를 만들 수 있음을 이전에 알아봤다.")]),s._v(" "),a("li",[s._v("이 외에도 클래스 추출하기, 클래스 인라인하기도 활용할 수 있다.")])]),s._v(" "),a("h3",{attrs:{id:"_1-레코드-캡슐화하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-레코드-캡슐화하기"}},[s._v("#")]),s._v(" 1. 레코드 캡슐화하기")]),s._v(" "),a("ul",[a("li",[s._v("'가변' 데이터일 경우 객체를 선호하고 값이 불변이면 단순히 레코드에 저장한다.")]),s._v(" "),a("li",[s._v("이름을 바꿀때는 그저 필드를 복제하여 사용한다.")]),s._v(" "),a("li",[s._v("레코드를 캡슐화하는 목적은 변수 자체는 물론 그 내용을 조작하는 방식도 통제하기 위해서다.")])]),s._v(" "),a("h3",{attrs:{id:"_2-컬렉션-캡슐화하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-컬렉션-캡슐화하기"}},[s._v("#")]),s._v(" 2. 컬렉션 캡슐화하기")]),s._v(" "),a("ul",[a("li",[s._v("가변 데이터는 모두 캡슐화하는게 좋다.")]),s._v(" "),a("li",[s._v("그러면 데이터 구조가 언제 어떻게 수정되는지 파악하기 쉬워서 필요한 시점에 데이터 구조를 변경하기도 쉬워진다.")]),s._v(" "),a("li",[s._v("컬렉션 변수로의 접근을 캡슐화하면서 게터가 컬렉션 자체를 반환하도록하면 그 컬렉션을 감싼 클래스가 눈치채지 못하는 상태에서 컬렉션의 원소들이 바뀌어 버릴 수 있다.")]),s._v(" "),a("li",[s._v("이런 문제를 방지하기 위해 컬렉셔을 감싼 클래스에 흔히 add(), remove()라는 이름의 컬렉션 변경자 메서드를 만들고 항상 이 클래스를 통해서만 컬렉션의 원소를 변경하도록 한다면 프로그램을 개선하면서 컬렉션을 원하는데로 다룰 수 있게 된다.")]),s._v(" "),a("li",[s._v("클래스에서 컬렉션을 관리하여 컬렉션 자체의 함수를 사용하지 못하게하면 컬렉션이 제공해주는 파이프라인과 같은 기능들을 사용하지 못할 수 있게 된다.")]),s._v(" "),a("li",[s._v("이를 해결하기 위해선 자바의 경우 읽기전용 컬렉션을 이용하면될 것이다. 그리고 컬렉션 케터를 제공하되 내부 컬렉션의 복제본을 반환하면 원본 컬렉션의 불변을 보장할 수 있을 것이다.")])]),s._v(" "),a("h3",{attrs:{id:"_3-기본형을-객체로-바꾸기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-기본형을-객체로-바꾸기"}},[s._v("#")]),s._v(" 3. 기본형을 객체로 바꾸기")]),s._v(" "),a("ul",[a("li",[s._v("단지 출력 이상의 기능이 필요해지는 순간 그 데이터를 표현하는 전용 클래스를 정의하자.")]),s._v(" "),a("li",[s._v("시작은 기본형 데이터를 단순히 감싼 것과 큰 차이가 없을 것이라 효과가 미미하더라도 나중에 특별한 동작이 필요해지면 이 클래스에 추가하면 되니 프로그램이 커질수록 점점 유용해진다.")])]),s._v(" "),a("h3",{attrs:{id:"_4-임시-변수를-질의-함수로-바꾸기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-임시-변수를-질의-함수로-바꾸기"}},[s._v("#")]),s._v(" 4. 임시 변수를 질의 함수로 바꾸기")]),s._v(" "),a("ul",[a("li",[s._v("함수 안에서 어떤 코드의 결괏값을 뒤에서 다시 참조할 목적으로 임시 변수를 쓰기도 한다.")]),s._v(" "),a("li",[s._v("임시 변수를 사용하면 코드 반복을 줄이고, 의미를 설명할 수 있어 유용하다.")]),s._v(" "),a("li",[s._v("그런데 한 걸음 더 나아가 아예 함수로 ㅁ나들어 사용하는게 좋을 때가 있다.")]),s._v(" "),a("li",[s._v("변수 대신 함수로 만들어두면 비슷한 계산을 수행하는 다른 함수에서도 사용할 수 있어 코드 중복이 줄어든다.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("해당 클래스의 price() 메서드에 이를 적용해보자.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basePrice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("discountFactor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ul",[a("li",[s._v("임시 변수들을 질의 함수로 변경하여 리팩토링 되었다.")])]),s._v(" "),a("h3",{attrs:{id:"_5-클래스-추출하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-클래스-추출하기"}},[s._v("#")]),s._v(" 5. 클래스 추출하기")]),s._v(" "),a("ul",[a("li",[s._v("메서드와 데이터가 너무 많은 클래스는 이해하기가 쉽지 않으니 잘 살펴보고 적절히 분리하는것이 좋다.")]),s._v(" "),a("li",[s._v("특정 데이터나 메서드 일부를 제거하면 어떤 일이 일어나는지 자문해보고, 제거해도 논리적인 문제가 없다면 분리할 수 있다는 뜻이다.")])]),s._v(" "),a("h3",{attrs:{id:"_6-클래스-인라인하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-클래스-인라인하기"}},[s._v("#")]),s._v(" 6. 클래스 인라인하기")]),s._v(" "),a("ul",[a("li",[s._v("이는 클래스 추출하기를 꺼꾸로 돌리는 리팩터링이다.")]),s._v(" "),a("li",[s._v("더 이상 제 역할을 못 해서 그대로 두면 안되는 클래스는 인라인해버린다.")]),s._v(" "),a("li",[s._v("역할을 옮기는 리팩터링을 하고나니 특정 클래스에 남은 역할이 거의 없을 때 이런 현상이 자주 발생하낟.")])]),s._v(" "),a("h3",{attrs:{id:"_7-위임-숨기기-중개자-제거하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-위임-숨기기-중개자-제거하기"}},[s._v("#")]),s._v(" 7. 위임 숨기기 (<-> 중개자 제거하기)")]),s._v(" "),a("ul",[a("li",[s._v("모듈화 설계를 제대로 하는 핵심은 캡슐화다. 어쩌면 가장 중요한 요소일 수도 있다.")]),s._v(" "),a("li",[s._v("서버 객체의 필드가 가르키는 위임 객체의 메서드를 호출하려면 클라이언트는 해당 객체를 알아야 한다.")]),s._v(" "),a("li",[s._v("즉 해당 객체의 인터페이스에 변경이 일어나면 수정이 필요해진다.")]),s._v(" "),a("li",[s._v("이러한 의존성을 없애기위해선 서버 자체에 위임 메서드를 만들어 위임 객체의 존재를 숨기면 된다.")]),s._v(" "),a("li",[s._v("그러면 위임 객체가 수정되더라도 서버 코드만 고치면 되며, 클라이언트는 아무런 영향을 받지 않는다.")])]),s._v(" "),a("h3",{attrs:{id:"_8-중개자-제거하기-위임-숨기기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-중개자-제거하기-위임-숨기기"}},[s._v("#")]),s._v(" 8. 중개자 제거하기 (<-> 위임 숨기기)")]),s._v(" "),a("ul",[a("li",[s._v("위임 숨기기를 이용하면 클라이언트가 위임 객체의 다른 기능을 사용하고 싶을때마다 서버의 위임 메서드를 추가하여야 한다.")]),s._v(" "),a("li",[s._v("이렇게 기능이 추가될 수록 단순히 전달만 하는 위임 메서드들이 성가셔질 수 있다.")]),s._v(" "),a("li",[s._v("이런경우 서버 클래스는 단순히 중개자 역할로 전락하게 되고 이럴땐 중개자를 제거하고 클라이언트는 위임 객체를 직접 호출하는게 나을 수 있다.")])]),s._v(" "),a("blockquote",[a("p",[s._v("이 냄새는 디미터의 법칙(최소 지식 원칙)을 너무 신봉할때 자주 나타난다. 내부 정보를 가능한 한 숨기고 밀접한 모듈과만 상호 작용하여 결합도를 낮추려고 하다가 위임 혹은 래퍼 메서드가 너무 늘어나 부작용이 생길수 도 있다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);