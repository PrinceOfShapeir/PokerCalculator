(this["webpackJsonppoker-calculator"]=this["webpackJsonppoker-calculator"]||[]).push([[0],{131:function(t,e,a){},132:function(t,e,a){},432:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(5),r=a.n(n),i=a(120),c=a.n(i),l=(a(131),a.p,a(132),a(50)),h=a(75),o=a(121),u=a(122),d=a(125),b=a(124),f=a(3),g=(a(133),a(434)),p=a(435),j=a(436),v=a(439),O=a(437),x=a(438);function m(t){var e=Object(f.a)(t).map((function(t){return M(t)})).sort((function(t,e){return t-e})),a=!1;for(var s in e)if(13===e[s]){a=!0;break}a&&e.unshift(0),console.log(e);var n=[e[0]];for(var r in e)if(e[r]!==n[n.length-1])if(e[r]===n[n.length-1]+1)n[n.length]=e[r];else{if(e.length-r+1<5)break;n.length<5&&(n=[e[r]])}return console.log(n),n.length>=5&&3500+B(n)}function k(t){for(var e=t.map((function(t){return M(t)})).sort().reverse(),a=0,s=0,n=0;n<e.length;n++)n<e.length&&(e[n]===e[n+1]?(a++,s=e[n]):a>0&&(n=e.length));switch(console.log(a),a){case 1:return s+2e3;case 2:return s+3e3;case 3:return s+6e3;default:return!1}return console.log(e+"is false??"),!1}function C(t){var e=[],a=Object(f.a)(t);if(e[0]=k(a)||0,!(e[0]>0))return!1;a=a.filter((function(t){return M(t)!=e[0]%1e3})),e[1]=k(a)||0,e[1]>0&&(a=a.filter((function(t){return M(t)!=e[1]%1e3})),e[2]=k(a)||0);var s=Math.max.apply(Math,Object(f.a)(e));if(s>6e3)return console.log("over 6k"),s-s%1e3+S(s%1e3+13)+S(Math.max.apply(Math,Object(f.a)(t.filter((function(t){return M(t!=M(s%1e3))})).map((function(t){return M(t)})))));if(s>3e3)return console.log(e),e=e.filter((function(t){return t!=s})),Math.max.apply(Math,Object(f.a)(e))>0?s-s%1e3+3*S(s%1e3+13)+Math.max.apply(Math,Object(f.a)(e))-Math.max.apply(Math,Object(f.a)(e))%1e3+2*S(Math.max.apply(Math,Object(f.a)(e))%1e3+13)+(Math.max.apply(Math,Object(f.a)(e))>=3e3?-1e3:0):s-s%1e3+S(s%1e3+13)+function(){a=Object(f.a)(t).filter((function(t){return M(t)!=s%1e3})).map((function(t){return M(t)}));for(var e=0,n=0;n<2;n++)e+=S(Math.max.apply(Math,Object(f.a)(a))),a=a.filter((function(t){return t!=Math.max.apply(Math,Object(f.a)(a))}));return e}();if(s>2e3){e=e.filter((function(t){return t!=s}));var n=0|Math.max.apply(Math,Object(f.a)(e));return n>0?s-s%1e3+n-n%1e3-1500+49*S(s%1e3)*28+49*S(n%1e3)*21+S(Math.max.apply(Math,Object(f.a)(Object(f.a)(t).map((function(t){return M(t)})).filter((function(t){return t!=s%1e3&&t!=n%1e3}))))):s-s%1e3+s%1e3*7+B([s%1e3,s%1e3].concat(Object(f.a)(function(t,e){var a=Object(f.a)(t).sort((function(t,e){return t-e}));for(;a.length>e;)a.shift();return a}(Object(f.a)(t).map((function(t){return M(t)})).filter((function(t){return t!=s%1e3})),3))))}return console.log("error no pair but still got here"),!1}function S(t){return M(t)*Math.pow(7,M(t)/3)/3e6}function M(t){return 0==t?0:t%13==0?13:t%13}function B(t){for(var e=Object(f.a)(t).map((function(t){return M(t)})).sort((function(t,e){return t-e}));e.length>5;)e.shift();return e.reduce((function(t,e){return t+S(e)}))}function W(t){var e=[];return e[e.length]=function(t){var e=t.slice();console.log(e);for(var a=[[],[],[],[]],s=[0,0,0,0],n=0;n<e.length;n++)e[n]<=13?(a[0].push(e[n]),s[0]++):e[n]>13&&e[n]<=26?(a[1].push(e[n]),s[1]++):e[n]>26&&e[n]<=39?(a[2].push(e[n]),s[2]++):e[n]>39&&e[n]<=52?(a[3].push(e[n]),s[3]++):console.log("couldn't catch  "+e[n]);var r=s.indexOf(Math.max.apply(Math,s));if(s[r]>=5){var i=m(a[r]);if(i)return 2*i;for(;a[r].length>5;)a[r].splice(a[r].indexOf(Math.min(a[r])),1);return 4e3+function(){var t=0;for(var e in a[r])t+=S(a[r][e]);return t}()}return!1}(t)||0,e[e.length]=m(t)||0,e[e.length]=C(t)||0,e[e.length]=B(t)||0,Math.max.apply(Math,e)}var A=[17,22,43,35,23,30,34];function w(t,e){return t===e?"Tied":t>e?"Wins":"Loses"}function R(t,e){switch(Math.max.apply(Math,Object(f.a)(t.concat(e).map((function(t){return M(t)}))))){case 13:return"an Ace ";case 12:return"a King ";case 11:return"a Queen ";case 10:return"a Jack ";case 9:return"a Ten ";case 8:return"a Nine ";case 7:return"an Eight ";case 6:return"a Seven ";case 5:return"a Six ";case 4:return"a Five ";case 3:return"a Four ";case 2:return"a Three ";case 1:return"a Two ";default:return"nothing "}}function y(t,e,a){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=function(){return s?"a ":""};return t>=7e3?n()+"Straight Flush":t>=6e3?"Four of a Kind":t>=5e3?n()+"Full House":t>=4e3?n()+"Flush":t>=3500?n()+"Straight":t>=3e3?"Three of a Kind":t>=2500?"Two Pair":t>=2e3?n()+"Pair":R(e,a)+"High Card"}console.log("handevaluator: "+W(A)),console.log("handevaluator: "+W([1,24,43,35,23,30,34])),console.log("pairevaluator: "+C(A)),console.log("winner is "+(W(A)>W([1,24,43,35,23,30,34])));var F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).table=function(){var t=[];for(var e in n.state.tableCards)t.push(Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(p.a,{onClick:e<=2?n.flopCards:e<=3?n.turnCards:n.riverCards,className:n.state.flop&&e<=2||n.state.turn&&e<=3||n.state.river&&e<=4?"flipCard":"",children:Object(s.jsx)(j.a,{src:e<=2&&n.state.flop||e<=3&&n.state.turn||e<=4&&n.state.river?"./images/".concat(n.state.tableCards[e],".svg"):"./images/53.svg"})}),Object(s.jsx)("p",{children:n.state.debug?n.state.tableCards[e]+" ("+(M(n.state.tableCards[e])+1)+")":""})]})}));return Object(s.jsx)(s.Fragment,{children:t})},n.leftHand=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.a,{onClick:n.revealLeft,className:n.state.revealLeft?"flipCard":"",children:Object(s.jsx)(j.a,{src:n.state.revealLeft?"./images/".concat(n.state.handA[0],".svg"):"./images/53.svg"})}),Object(s.jsx)(p.a,{onClick:n.revealLeft,className:n.state.revealLeft?"flipCard":"",children:Object(s.jsx)(j.a,{src:n.state.revealLeft?"./images/".concat(n.state.handA[1],".svg"):"./images/53.svg"})})]})},n.rightHand=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.a,{onClick:n.revealRight,className:n.state.revealRight?"flipCard":"",children:Object(s.jsx)(j.a,{src:n.state.revealRight?"./images/".concat(n.state.handB[0],".svg"):"./images/53.svg"})}),Object(s.jsx)(p.a,{onClick:n.revealRight,className:n.state.revealRight?"flipCard":"",children:Object(s.jsx)(j.a,{src:n.state.revealRight?"./images/".concat(n.state.handB[1],".svg"):"./images/53.svg"})})]})},n.state={tableCards:[53,53,53,53,53],handA:[53,53],handB:[53,53],handsPlayed:0,leftWins:localStorage.getItem("leftWins")?parseInt(localStorage.getItem("leftWins")):0,rightWins:localStorage.getItem("rightWins")?parseInt(localStorage.getItem("rightWins")):0,ties:localStorage.getItem("ties")?parseInt(localStorage.getItem("ties")):0,deck:new Array(52).fill(0).map((function(t,e){return e+1})),debug:!1,handAValue:0,handBValue:0,flop:!1,turn:!1,river:!1,displayCards:!1,dealt:!1,revealRight:!1,revealLeft:!1,orientationLocked:!1,revealWinner:!1,winCounted:!1,chips:[500,500],bets:[0,0],pot:0,betMessage:null,checked:{left:!1,right:!1},oldBets:[0,0],betting:!1},n.enableBetting=function(){n.setState({betting:!n.state.betting})},n.betHands=function(t,e){if(n.state.checked.right&&n.state.checked.left&&n.setState({checked:{right:!1,left:!1}}),0===t){if(n.state.chips[t]>=e)return n.setState({chips:[n.state.chips[t]-e,n.state.chips[1]],bets:[n.state.bets[t]+e,n.state.bets[1]]})}else if(n.state.chips[t]>=e)return n.setState({chips:[n.state.chips[0],n.state.chips[t]-e],bets:[n.state.bets[0],n.state.bets[t]+e]})},n.check=function(t){n.setState({checked:Object(h.a)(Object(h.a)({},n.state.checked),{},Object(l.a)({},t,!n.state.checked[t]))})},n.checkBets=function(){return n.state.bets[0]!==n.state.bets[1]?n.state.bets[0]>n.state.bets[1]?0===n.state.chips[1]?(n.state.betMessage&&n.setState({betMessage:null}),!0):(n.setState({betMessage:"Right needs to bet ".concat(n.state.bets[0]-n.state.bets[1]," more.")}),!1):!(n.state.bets[1]>n.state.bets[0])||(0===n.state.chips[0]?(n.state.betMessage&&n.setState({betMessage:null}),!0):(n.setState({betMessage:"Left needs to bet ".concat(n.state.bets[1]-n.state.bets[0]," more.")}),!1)):(n.state.betMessage&&n.setState({betMessage:null}),n.state.bets[0]+n.state.bets[1]!==0||(!!(n.state.checked.right&&n.state.checked.left||!n.state.betting)||(n.setState({betMessage:"All players need to check to continue."}),!1)))},n.doubleOrNothing=function(t){var e=t?0:1,a=n.state.bets;return a[e]>a[t]?2*(a[e]-a[t]):0},n.countWins=function(){if(n.state.dealt&&n.state.river&&!n.state.winCounted)if(isNaN(n.state.handAValue)||isNaN(n.state.handBValue))console.log("Error, non numeric hand value");else{var t=n.state.handAValue>=n.state.handBValue?n.state.handAValue>n.state.handBValue?1:0:-1,e=n.state.handBValue>=n.state.handAValue?n.state.handBValue>n.state.handAValue?1:0:-1;if(n.setState({winCounted:!0}),t>0)return localStorage.setItem("leftWins",n.state.leftWins+t),n.setState({leftWins:n.state.leftWins+t}),n.divideChips(0);if(e>0)return localStorage.setItem("rightWins",n.state.rightWins+e),n.setState({rightWins:n.state.rightWins+e}),n.divideChips(1);if(t===e===0)return localStorage.setItem("ties",n.state.ties+1),n.setState({ties:n.state.ties+1}),n.divideChips(-1)}},n.divideChips=function(t){return t>=1?n.setState({chips:[n.state.chips[0],n.state.chips[1]+n.state.bets.reduce((function(t,e){return t+e}))+n.state.pot],bets:[0,0],oldBets:[0,0],pot:0}):0===t?n.setState({chips:[n.state.chips[0]+n.state.bets.reduce((function(t,e){return t+e}))+n.state.pot,n.state.chips[1]],bets:[0,0],oldBets:[0,0],pot:0}):n.setState({chips:[n.state.chips[0]+n.state.bets[0]+n.state.oldBets[0],n.state.chips[1]+n.state.bets[1]+n.state.oldBets[1]],bets:[0,0],oldBets:[0,0],pot:0})},n.fold=function(t){return n.divideChips(t?0:1)},n.lockOrientation=function(){n.setState({orientationLocked:!0})},n.showDebug=function(){n.setState({debug:!n.state.debug})},n.revealAll=function(){n.setState({revealLeft:!0,revealRight:!0,flop:!0,turn:!0,river:!0})},n.revealLeft=function(){n.setState({revealLeft:!n.state.revealLeft})},n.revealRight=function(){n.setState({revealRight:!n.state.revealRight})},n.flopCards=function(){n.checkBets()&&n.setState({flop:!n.state.flop,checked:{left:!1,right:!1},pot:n.state.bets.reduce((function(t,e){return t+e}))+n.state.pot,bets:[0,0],oldBets:n.state.oldBets.map((function(t,e){n.state.bets[e]}))})},n.turnCards=function(){n.checkBets()&&n.setState({turn:!n.state.turn,checked:{left:!1,right:!1},pot:n.state.bets.reduce((function(t,e){return t+e}))+n.state.pot,bets:[0,0],oldBets:n.state.oldBets.map((function(t,e){n.state.bets[e]}))})},n.riverCards=function(){n.checkBets()&&n.setState({river:!n.state.river,checked:{left:!1,right:!1},pot:n.state.bets.reduce((function(t,e){return t+e}))+n.state.pot,bets:[0,0],oldBets:n.state.oldBets.map((function(t,e){n.state.bets[e]}))})},n.revealWinners=function(){if(n.checkBets())return n.countWins(),n.setState({revealWinner:!n.state.revealWinner})},n.dealHand=function(){if(!n.checkBets()&&n.state.dealt)return null;n.countWins();var t=[[],[],[],n.state.deck],e=t[0],a=t[1],s=t[2],r=t[3];r=function(t,e){for(var a=Object(f.a)(e),s=0;s<t;s++)for(var n in a){var r=Math.floor(Math.random()*Math.floor(52)),i=[a[r],a[n]];a[n]=i[0],a[r]=i[1]}return a}(5,r),e.push(r.pop()),a.push(r.pop()),e.push(r.pop()),a.push(r.pop()),r.pop(),s.push(r.pop()),s.push(r.pop()),s.push(r.pop()),r.pop(),s.push(r.pop()),r.pop(),s.push(r.pop()),console.log([].concat(Object(f.a)(e),Object(f.a)(s))),n.setState({handA:Object(f.a)(e),handB:Object(f.a)(a),tableCards:Object(f.a)(s),handAValue:W([].concat(Object(f.a)(e),Object(f.a)(s))),handBValue:W([].concat(Object(f.a)(a),Object(f.a)(s))),dealt:!0,flop:!1,river:!1,turn:!1,revealRight:!1,revealLeft:!1,revealWinner:!1,winCounted:!1,checked:{left:!1,right:!1},betMessage:null})},n}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"text-center",style:{backgroundColor:"#4caf50",border:"thick solid #A0522D",minHeight:"100vh",height:"100%"},children:[function(){t.state.orientationLocked||(screen.lockOrientation("landscape"),t.lockOrientation())},Object(s.jsx)("h1",{children:"Compare two Poker Hands"}),Object(s.jsx)("p",{children:(this.state.checked.right&&this.state.checked.left&&this.state.bets[0]===this.state.bets[1]||this.state.bets[0]===this.state.bets[1]&&this.state.bets[0]+this.state.bets[1]>0)&&this.state.dealt?"Pot is good":this.state.betMessage?this.state.betMessage:"Deal two poker hands and then guess which one is the winner."}),Object(s.jsx)(v.a,{onClick:this.dealHand,children:"Shuffle and Deal."}),Object(s.jsx)(s.Fragment,{children:this.state.dealt&&!this.state.flop?Object(s.jsx)(v.a,{onClick:this.flopCards,children:"Reveal Flop"}):""}),Object(s.jsx)(s.Fragment,{children:this.state.dealt&&this.state.flop&&!this.state.turn?Object(s.jsx)(v.a,{onClick:this.turnCards,children:"Reveal Turn"}):""}),Object(s.jsx)(s.Fragment,{children:this.state.dealt&&this.state.turn&&!this.state.river?Object(s.jsx)(v.a,{onClick:this.riverCards,children:"Reveal River"}):""}),Object(s.jsx)(O.a,{fluid:!0,children:Object(s.jsxs)(x.a,{children:[Object(s.jsxs)(g.a,{xs:"2",children:[Object(s.jsx)(this.leftHand,{}),Object(s.jsx)(v.a,{onClick:this.revealLeft,children:"Reveal Hand"}),Object(s.jsx)("p",{children:this.state.betting&&this.state.chips[0]}),!this.state.revealWinner&&this.state.betting&&Object(s.jsxs)(s.Fragment,{children:[" ",Object(s.jsx)(v.a,{onClick:function(){return t.fold(0)},children:"Fold"}),Object(s.jsx)(v.a,{onClick:function(){t.state.bets[1]>t.state.bets[0]?t.betHands(0,t.state.bets[1]-t.state.bets[0]):t.check("left")},children:this.state.bets[1]>this.state.bets[0]?"Call ".concat(this.state.bets[1]-this.state.bets[0]):"Check"}),Object(s.jsxs)(v.a,{onClick:function(){return t.betHands(0,t.doubleOrNothing(0)||5)},children:["Bet ",this.doubleOrNothing(0)||5," Chips"]})]})]}),Object(s.jsxs)(g.a,{xs:"8",children:[Object(s.jsx)(x.a,{children:Object(s.jsx)(this.table,{})}),Object(s.jsxs)(x.a,{style:{fontSize:15},children:[Object(s.jsxs)(g.a,{children:[Object(s.jsx)("p",{children:this.state.debug?this.state.handAValue:""}),Object(s.jsx)("p",{children:this.state.debug?this.state.handA.toString()+" ("+this.state.handA.map((function(t){return M(t+1)})).toString()+")":""}),Object(s.jsx)("p",{children:this.state.river&&this.state.revealWinner?"Left ".concat(w(this.state.handAValue,this.state.handBValue)," with ").concat(y(this.state.handAValue,this.state.handA,this.state.tableCards,!0),"!"):""}),Object(s.jsx)("p",{children:this.state.river&&this.state.revealWinner?"Left total wins: ".concat(this.state.leftWins):""})]}),Object(s.jsxs)(g.a,{children:[Object(s.jsx)(v.a,{onClick:this.revealWinners,children:"Reveal Winner"}),Object(s.jsx)(v.a,{onClick:this.enableBetting,children:this.state.betting?"Disable Betting":"Enable Betting"}),Object(s.jsx)("p",{children:this.state.bets.reduce((function(t,e){return t+e}))+this.state.pot}),Object(s.jsx)("p",{children:this.state.river&&this.state.revealWinner?"Total ties: ".concat(this.state.ties):""})]}),Object(s.jsxs)(g.a,{children:[Object(s.jsx)("p",{children:this.state.debug?this.state.handBValue:""}),Object(s.jsx)("p",{children:this.state.debug?this.state.handB.toString()+" ("+this.state.handB.map((function(t){return M(t+1)})).toString()+")":""}),Object(s.jsx)("p",{children:this.state.river&&this.state.revealWinner?"Right ".concat(w(this.state.handBValue,this.state.handAValue)," with ").concat(y(this.state.handBValue,this.state.handB,this.state.tableCards,!0),"!"):""}),Object(s.jsx)("p",{children:this.state.river&&this.state.revealWinner?"Right total wins: ".concat(this.state.rightWins):""})]})]})]}),Object(s.jsxs)(g.a,{xs:"2",children:[Object(s.jsx)(this.rightHand,{}),Object(s.jsx)(v.a,{onClick:this.revealRight,children:"Reveal Hand"}),Object(s.jsx)("p",{children:this.state.betting&&this.state.chips[1]}),!this.state.revealWinner&&this.state.betting&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v.a,{onClick:function(){return t.fold(1)},children:"Fold"}),Object(s.jsx)(v.a,{onClick:function(){t.state.bets[0]>t.state.bets[1]?t.betHands(1,t.state.bets[0]-t.state.bets[1]):t.check("right")},children:this.state.bets[0]>this.state.bets[1]?"Call ".concat(this.state.bets[0]-this.state.bets[1]):"Check"}),Object(s.jsxs)(v.a,{onClick:function(){return t.betHands(1,t.doubleOrNothing(1)||5)},children:["Bet ",this.doubleOrNothing(1)||5," Chips"]})]})]})]})}),Object(s.jsxs)("p",{children:["See an error? Please copy the debug info, and file a report on our ",Object(s.jsx)("a",{href:"https://github.com/PrinceOfShapeir/poker-calculator",children:"Github page."})]}),Object(s.jsx)(v.a,{onClick:this.showDebug,children:"Show debug info"}),Object(s.jsx)(s.Fragment,{children:this.state.debug?Object(s.jsx)(v.a,{onClick:navigator.clipboard.writeText(this.state.handA.toString()+","+this.state.tableCards.toString()+","+this.state.handB.toString()),children:"Copy Debug Info"}):""}),Object(s.jsx)(s.Fragment,{children:this.state.revealLeft&&this.state.revealRight&&this.state.flop&&this.state.turn&&this.state.river||!this.state.dealt?"":Object(s.jsx)(v.a,{onClick:this.revealAll,children:"Reveal All"})})]})}}]),a}(n.Component);a(431);var L=function(){return Object(s.jsx)(F,{})},V=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,440)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),r(t),i(t)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),V()}},[[432,1,2]]]);
//# sourceMappingURL=main.a53ca118.chunk.js.map