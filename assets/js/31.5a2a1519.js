(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{365:function(t,v,e){"use strict";e.r(v);var _=e(35),l=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("아무 메서드도 담고 있지 않고, 단지 자신을 구현하는 클래스가 특정 속성을 가짐을 표시해주는 인터페이스를 "),e("strong",[t._v("마커 인터페이스라고 한다.")])]),t._v(" "),e("li",[t._v("Serializable은 자신을 구현한 클래스의 인스턴스는 ObjectOutputSetream을 통해 write할 수 있다고 알려준다.")]),t._v(" "),e("li",[t._v("마커 애너테이션이 나와 마커 인터페이스를 쓰지 않는다는 이야기가 있지만 사실이 아니다.")])]),t._v(" "),e("h4",{attrs:{id:"마커-인터페이스-vs-마커-애너테이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#마커-인터페이스-vs-마커-애너테이션"}},[t._v("#")]),t._v(" 마커 인터페이스 vs 마커 애너테이션")]),t._v(" "),e("ul",[e("li",[t._v("마커 인터페이스는 이를 구현한 클래스의 인스턴스들을 구분하는 타입으로 쓸 수 있으나, 마커 애너테이션은 그렇지 않다.")]),t._v(" "),e("li",[t._v("마커 인터페이스는 적용 대상을 더 정밀하게 지정할 수 있다. @Tartget을 을 ElementType.TYPE으로 선언한 애너테이션은 모든 타입(클래스, 인터페이스, 열거타입, 애너테이션)에 달 수 있다. 부착 할 수 있는 타입을 세밀하게 제한하지 못한다.")]),t._v(" "),e("li",[t._v("마커 애너테이션은 거대한 애너테이션 시스템의 자원을 받는다. 즉 애너테이션을 적그 활용하는 프레임워크에서는 일관성을 유지할 수 있다.")])]),t._v(" "),e("h4",{attrs:{id:"언제-무엇을-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#언제-무엇을-사용"}},[t._v("#")]),t._v(" 언제 무엇을 사용?")]),t._v(" "),e("ul",[e("li",[t._v('마커를 클래스나 인터페이스에 적용할 때 "이 마킹이 된 객체를 매개변수로 받는 메서드를 작성할 일이 있을까?" 라고 자문해보자.')]),t._v(" "),e("li",[t._v('"그렇다"면 마커 인터페이스를 사용하여 매개변수 타입을 이용하면 컴파일 시점에 에러를 잡아낼 수 있다.')]),t._v(" "),e("li",[t._v("이런 메서드를 작성할 일이 절대 없다고 확신하면 아마도 마커 애너테이션이 나은 선택일 것이다.")])]),t._v(" "),e("h4",{attrs:{id:"핵심-정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#핵심-정리"}},[t._v("#")]),t._v(" 핵심 정리")]),t._v(" "),e("ul",[e("li",[t._v("마커 인터페이스와 마커 애너테이션은 각자의 쓰임이 있다.")]),t._v(" "),e("li",[t._v("새로 추가하는 메서드 없이 단지 타입 정의가 목적이라면 마커 인터페이스를 선택하자.")]),t._v(" "),e("li",[t._v("클래스, 인터페이스외의 프로그램 요소에 마킹해야 하거나, 애너테이션을 적극 활용하는 프레임워크에서 사용하려면 마커 애너테이션이 옳을 것이다.")]),t._v(" "),e("li",[e("strong",[t._v("적용 대상이 ElementType.TYPE인 마커 애너테이션을 작성하고 있다면, 잠시 여유를 같고 정말 애너테이션으로 구현하는게 옳은지, 마커 인터페이스가 더 좋지 않을지 곰니해보자.")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);