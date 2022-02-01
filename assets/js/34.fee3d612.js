(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{499:function(t,v,_){t.exports=_.p+"assets/img/quorum-read-write.f551e794.png"},546:function(t,v,_){"use strict";_.r(v);var a=_(31),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"선형성-강력한-일관성-string-consistency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선형성-강력한-일관성-string-consistency"}},[t._v("#")]),t._v(" 선형성(강력한 일관성(String Consistency))")]),t._v(" "),a("p",[t._v("최종적 일관성을 지닌 데이터베이스에서 두 개의 다른 복제본은 서로 다른 데이터를 가지고 있을 수 있다.")]),t._v(" "),a("p",[a("strong",[t._v("선형성 시스템에서는 클라이언트가 쓰기를 성공적으로 완료하자마자 그 데이터베이스를 읽는 모든 클라이언트는 새 값을 볼 수 있어야 한다.")]),t._v(" 즉, 선형성은 "),a("code",[t._v("최신성 보장")]),t._v("이라고 할 수 있다.")]),t._v(" "),a("h4",{attrs:{id:"선형성-대-직렬성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선형성-대-직렬성"}},[t._v("#")]),t._v(" 선형성 대 직렬성")]),t._v(" "),a("ul",[a("li",[t._v("직렬성은 모든 트랜잭션이 여러 객체를 읽고 쓸 수 있는 상황에서의 트랜잭션의 격리 속성이다.")]),t._v(" "),a("li",[t._v("선형성은 레지스터(개별 객체)에 실행되는 읽기와 쓰기에 대한 최신성 보장이다.")]),t._v(" "),a("li",[a("strong",[t._v("직렬성이 보장된다고 선형성이 반드시 보장되진 않는다.")])])]),t._v(" "),a("h3",{attrs:{id:"잠금과-리더-선출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#잠금과-리더-선출"}},[t._v("#")]),t._v(" 잠금과 리더 선출")]),t._v(" "),a("ul",[a("li",[t._v("단일 리더 복제 시스템은 리더가 여러 개(스플릿 브레인)가 아니라 반드시 하나만 존재하도록 보장해야 한다.")]),t._v(" "),a("li",[a("strong",[t._v("리더를 선출하는 방법으로 잠금을 사용할 수 있고 이 잠금은 선형적이어야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("분산 잠금과 리더 선출을 위해 아파치 주키퍼나 etcd 같은 코디네이션 서비스가 종종 사용된다.")])])])]),t._v(" "),a("h3",{attrs:{id:"제약-조건과-유일성-보장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약-조건과-유일성-보장"}},[t._v("#")]),t._v(" 제약 조건과 유일성 보장")]),t._v(" "),a("ul",[a("li",[t._v("데이터베이스에서 흔하게 사용되는 유일성 제약 조건도 잠금과 비슷하게 선형성을 필요로 한다.")])]),t._v(" "),a("h3",{attrs:{id:"선형성-시스템-구축하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선형성-시스템-구축하기"}},[t._v("#")]),t._v(" 선형성 시스템 구축하기")]),t._v(" "),a("h4",{attrs:{id:"단일-리더-복제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단일-리더-복제"}},[t._v("#")]),t._v(" 단일 리더 복제")]),t._v(" "),a("ul",[a("li",[t._v("단일 리더 복제는 팔로워를 동기식으로 복제한다면 선형적이 될 수 있다.")]),t._v(" "),a("li",[t._v("비동기 복제를 사용하는 경우 장애 복구 시 쓰기가 손실될 가능성이 있으므로 지속성과 선형성 모두 위반한다.")])]),t._v(" "),a("h4",{attrs:{id:"다중-리더-복제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다중-리더-복제"}},[t._v("#")]),t._v(" 다중 리더 복제")]),t._v(" "),a("ul",[a("li",[t._v("다중 리더 복제는 일반적으로 선형적이지 않다. 보동 비동기로 복제를 진행하기 때문이다.")])]),t._v(" "),a("h4",{attrs:{id:"리더-없는-복제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리더-없는-복제"}},[t._v("#")]),t._v(" 리더 없는 복제")]),t._v(" "),a("img",{attrs:{src:_(499)}}),t._v(" "),a("ul",[a("li",[t._v("카산드라와 같은 다이나모 스타일 모델에서 정족수를 사용한 읽기 쓰기는 선형적인 것처럼 보이지만 에지 케이스(네트워크 지연)에 의해 경쟁 조건이 생길 가능성이 존재한다.")]),t._v(" "),a("li",[t._v("위 예시는 각 클라이언트가 종적수 읽기 및 쓰기를 수행하므로 "),a("strong",[t._v("Strong Consistnecy(선형성) 조건을 만족(w + r > n)하지만 선형적이지 않다.")]),t._v(" "),a("ul",[a("li",[t._v("카산드라는 위 상황에서 읽기 복구를하기 때문에 A가 읽을 때 2가 복구되기 때문에 B는 최신 데이터를 받을 수 있다.")]),t._v(" "),a("li",[t._v("하지만 카산드라는 최종 쓰기 승리 충돌 해소 방법을 사용하기 때문에 같은 키에 동시에 여러 쓰기가 들어오면 선형성을 보장할 수 없게 된다.")])])]),t._v(" "),a("li",[a("strong",[t._v("다이나모 스타일을 사용하는 리더 없는 복제 시스템은 선형성을 보장할 수 없다고 보는 것이 안전하다.")])])]),t._v(" "),a("h3",{attrs:{id:"선형성의-비용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선형성의-비용"}},[t._v("#")]),t._v(" 선형성의 비용")]),t._v(" "),a("ul",[a("li",[t._v("두 데이터센터의 데이터베이스 간에 복제를 진행하고 있을 때 두 데이터센터 사이에 네트워크가 끊기면 무슨일이 생길지 생각해보자.\n"),a("ul",[a("li",[t._v("여기서 각 데이터센터 내부 네트워크는 동작하여 클라이언트들은 데이터센터에 접근할 수 있으나 데이터센터끼리만 연결이 불가능하다고 가정한다.")])])]),t._v(" "),a("li",[a("strong",[t._v("이 경우 선형성과 가용성 사이에서 선택해야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("선형성을 선택하면 두 데이터센터간에 복제가 불가능하기 때문에 어떤한 쓰기도 수행되어선 안된다.")]),t._v(" "),a("li",[t._v("가용성을 선택하면 두 데이터센터간에 복제가 불가능하여 데이터의 일관성이 깨질 수 있지만 쓰기 동작을 수행할 수 있게 된다.")])])]),t._v(" "),a("li",[t._v("가용성을 제공하는 다중 리더 데이터베이스 시스템이라면 이 상황에서도 각 데이터센터는 계속 정상 동작할 것이다.")]),t._v(" "),a("li",[t._v("반면, 단일 리더 복제를 사용하는 경우 데이터센터 간 네트워크가 끊겼기 때문에 모든 쓰기가 중단되고 팔로워로 부터 읽는 데이터의 선형성이 보장되지 않는다.")])]),t._v(" "),a("h3",{attrs:{id:"cap-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap-정리"}},[t._v("#")]),t._v(" CAP 정리")]),t._v(" "),a("ul",[a("li",[t._v("흔히 CAP 정리는 일관성(Consistency), 가용성(Availability), 분단 내성(Partition tolerance) 중 두 개를 고를 수 있다고 표현되지만 이는 오해의 소지가 있다.\n"),a("ul",[a("li",[a("strong",[t._v("네트워크 분단은 결함이므로 선택할 수 있는 것이 아니고 반드시 발생하기 때문에 분단 내성은 반드시 고려되어야 한다.")])]),t._v(" "),a("li",[a("strong",[t._v("즉 CAP 정리는 네트워크 분단(P)이 생겼을 때 일관성(C)과 가용성(A) 중 하나를 선택할 수 있다고 보는게 좋다.")])])])]),t._v(" "),a("li",[t._v("만약 애플리케이션에서 선형성이 요구된다면 네트워크 분단 시 가용성을 보장할 수 없게 된다. 반대로 애플리케이션에서 선형성을 요구하지 않는다면 네트워크 분단 시 선형적이지 않지만 가용한 상태를 제공할 수 있다.\n"),a("ul",[a("li",[t._v("*"),a("em",[t._v("선형성이 필요 없는 애플리케이션은 네트워크 문제에 더 강인하다.")])])])])]),t._v(" "),a("h3",{attrs:{id:"선형성과-네트워크-지연"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선형성과-네트워크-지연"}},[t._v("#")]),t._v(" 선형성과 네트워크 지연")]),t._v(" "),a("ul",[a("li",[t._v("선형성을 보장하기 위해서는 읽기와 쓰기 요청의 응답 시간이 네트워크 지연에 크게 영향을 받을 수 밖에 없다.")]),t._v(" "),a("li",[t._v("네트워크는 신뢰성이 없기 때문에 지연 시간에 민간함 시스템에서는 선형성을 보장하기 어려울 수 밖에 없다.")]),t._v(" "),a("li",[t._v("선형성을 포기하면 네트워크 지연에 덜 영향을 받으므로 훨씬 더 빠를 수 있다. 트레이드 오프가 필요하다.")])])])}),[],!1,null,null,null);v.default=s.exports}}]);