(this["webpackJsonpgithub-explore"]=this["webpackJsonpgithub-explore"]||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},42:function(n,e,t){n.exports=t.p+"static/media/github.0b819d63.svg"},45:function(n,e,t){n.exports=t(72)},72:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(35),l=t.n(o),i=t(10),c=t(3),u=t(21),s=t.n(u),p=t(44),m=t(36),d=t(12),f=t(17),b=t(19),g=t.n(b),x=t(6),E=t(7),h=t(43);function v(){var n=Object(x.a)(["\n    margin-top: 80px;\n    max-width: 700px;\n\n    a{\n        background: #fff;\n        border-radius: 5px;\n        width: 100%;\n        padding: 24px;\n        display: block;\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        transition: transform 0.2s;\n\n        & + a{\n            margin-top: 16px;\n        }\n\n        &:hover{\n            transform: translateX(10px);\n        }\n\n        img{\n            width: 64px;\n            height: 64px;\n            border-radius: 50%;\n        }\n\n        div{\n            margin: 16px;\n            flex: 1;\n\n            strong{\n                font-size: 20px;\n                color: #3d3d4d;\n            }\n\n            p{\n                font-size: 18px;\n                color: #8a8ab3;\n                margin-top: 4px;\n            }\n        }\n\n        svg{\n            margin-left: auto;\n            color: #cbcbd6;\n        }\n\n\n    }\n"]);return v=function(){return n},n}function j(){var n=Object(x.a)(["\n     display: block;\n     color: #c53030;\n     margin-top: 8px;\n"]);return j=function(){return n},n}function O(){var n=Object(x.a)(["\n            border-color: #c53030;\n        "]);return O=function(){return n},n}function y(){var n=Object(x.a)(["\n    margin-top: 40px;\n    max-width: 700px;\n\n    display: flex;\n\n    input{\n        flex: 1;\n        height: 70px;\n        padding: 0 24px;\n        border: 0;\n        border-radius: 5px 0 0 5px;\n        color: #a8a8b3;\n        border: 2px solid #fff;\n        border-right: 0;\n\n        ","\n\n        &::placeholder{\n            color: #a8a8b3;\n        }\n    }\n\n    button{\n        width: 210px;\n        height: 70px;\n        background: #04D361;\n        border-radius: 0px 5px 5px 0px;\n        border: 0;\n        color: #fff;\n        font-weight: bold;\n        transition: 0.2s;\n\n\n        &:hover{\n            background: ","\n        }\n    }\n\n"]);return y=function(){return n},n}function k(){var n=Object(x.a)(["\n    font-size: 48px;\n    color: #3A3A3A;\n    max-width: 450px;\n    line-height: 56px;\n\n\n    margin-top: 80px;\n"]);return k=function(){return n},n}var w=E.c.h1(k()),z=E.c.form(y(),(function(n){return n.hasError&&Object(E.b)(O())}),Object(h.a)(.2,"#04D361")),S=E.c.span(j()),_=E.c.div(v()),F=t(40),D=t.n(F).a.create({baseURL:"https://api.github.com"}),G=function(){var n=Object(r.useState)(""),e=Object(d.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),c=Object(d.a)(l,2),u=c[0],b=c[1],x=Object(r.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),E=Object(d.a)(x,2),h=E[0],v=E[1];function j(){return(j=Object(m.a)(s.a.mark((function n(e){var r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return b("Digite autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,D.get("repos/".concat(t));case 7:r=n.sent,a=r.data,v([].concat(Object(p.a)(h),[a])),o(""),b(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),b("Erro na busca por esse reposit\xf3rio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(h))}),[h]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:g.a,alt:"Github Explorer"}),a.a.createElement(w,null,"Explore reposit\xf3rios do Github"),a.a.createElement(z,{hasError:!!u,onSubmit:function(n){return j.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite o nome do reposit\xf3rio"}),a.a.createElement("button",{type:"submit"},"Pesquisar")),u&&a.a.createElement(S,null,u),a.a.createElement(_,null,h.map((function(n){return a.a.createElement(i.b,{key:n.full_name,to:"/repositories/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(f.b,{size:20}))}))))},I=t(41);function J(){var n=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 960px;\n    height: 100vh;\n    z-index: 9999; /* n\xfamero m\xe1ximo \xe9 9999 */\n"]);return J=function(){return n},n}function A(){var n=Object(x.a)(["\n    margin-top: 80px;\n\n    a{\n        background: #fff;\n        border-radius: 5px;\n        width: 100%;\n        padding: 24px;\n        display: block;\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        transition: transform 0.2s;\n\n        & + a{\n            margin-top: 16px;\n        }\n\n        &:hover{\n            transform: translateX(10px);\n        }\n\n        div{\n            margin: 16px;\n            flex: 1;\n\n            strong{\n                font-size: 20px;\n                color: #3d3d4d;\n            }\n\n            p{\n                font-size: 18px;\n                color: #8a8ab3;\n                margin-top: 4px;\n            }\n        }\n\n        svg{\n            margin-left: auto;\n            color: #cbcbd6;\n        }\n\n\n    }\n"]);return A=function(){return n},n}function N(){var n=Object(x.a)(["\n    margin-top: 80px;\n\n    header{\n        display: flex;\n        align-items:  center;\n\n        img{\n            width: 120px;\n            height: 120px;\n            border-radius: 50%;\n        }\n\n        div{\n            margin-left: 24px;\n\n            strong{\n                font-size: 36px;\n                color: #3d3d4d;\n            }\n\n            p{\n                font-size: 18px;\n                color: #737380;\n                margin-top: 4px;\n            }\n        }\n    }\n\n    ul{\n        display: flex;\n        list-style: none;\n        margin-top: 40px;\n\n        li{\n\n            & + li{\n                margin-left: 80px;\n            }\n\n            strong{\n                display: block;\n                font-size: 36px;\n                color: #3d3d4d;\n\n                span{\n                    display: block;\n                    margin-top: 4px;\n                    color: #6c6c80;\n                }\n            }\n        }\n    }\n"]);return N=function(){return n},n}function R(){var n=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    a{\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        color: #8a8a8a;\n        transition: color 0.2s;\n\n        &:hover{\n            color: #666;\n        }\n\n        svg{\n            margin-right: 4px;\n        }\n    }\n"]);return R=function(){return n},n}var X=E.c.header(R()),q=E.c.section(N()),B=E.c.div(A()),C=E.c.div(J()),L=function(){var n=Object(r.useState)(null),e=Object(d.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),u=Object(d.a)(l,2),s=u[0],p=u[1],m=Object(c.f)().params;return Object(r.useEffect)((function(){D.get("repos/".concat(m.repositories)).then((function(n){o(n.data)})),D.get("repos/".concat(m.repositories,"/issues")).then((function(n){p(n.data)}))}),[m.repositories]),a.a.createElement(a.a.Fragment,null,a.a.createElement(X,null,a.a.createElement("img",{src:g.a,alt:""}),a.a.createElement(i.b,{to:"/"},a.a.createElement(f.a,{size:16}),"Voltar")),t?a.a.createElement(q,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Starr")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues abertas")))):a.a.createElement(C,null,a.a.createElement(I.a,{size:60})),a.a.createElement(B,null,s.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url,target:"blank"},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(f.b,{size:20}))}))))},M=function(){return a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/",component:G}),a.a.createElement(c.a,{path:"/repositories/:repositories+",component:L}))},P=t(42),U=t.n(P);function V(){var n=Object(x.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        outline: none;\n        box-sizing: border-box;\n    }\n\n    body{\n        background: #F0F0F5 url(",") no-repeat 70% top;\n\n    }\n\n    body, input, button {\n        font: 16px Roboto, sans-serif;\n    }\n\n    #root{\n        max-width: 960px;\n        margin: 0 auto;\n        padding: 40px 20px\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n"]);return V=function(){return n},n}var H=Object(E.a)(V(),U.a);var K=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(M,null)),a.a.createElement(H,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1fbf8429.chunk.js.map