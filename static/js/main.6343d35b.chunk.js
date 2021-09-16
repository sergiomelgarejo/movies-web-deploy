(this["webpackJsonpmovies-web"]=this["webpackJsonpmovies-web"]||[]).push([[0],{12:function(e,t,c){e.exports={movie_card:"MovieCard_movie_card__2Yleh",movie_image:"MovieCard_movie_image__1Z8Ys",title:"MovieCard_title__1b2L-",rating_section:"MovieCard_rating_section__1qe6W",rating:"MovieCard_rating__3EcK4"}},13:function(e,t,c){e.exports={container:"SearchBar_container__1tuY6",search_box:"SearchBar_search_box__2ITg6",search_button:"SearchBar_search_button__1t7Ny",search_input:"SearchBar_search_input__hZtUl"}},18:function(e,t,c){e.exports={title:"App_title__3O9_W"}},21:function(e,t,c){e.exports={spinner:"Spinner_spinner__2wZdh",rotate:"Spinner_rotate__3K8Ek",animate:"Spinner_animate__159wq"}},23:function(e,t,c){e.exports={movies_list:"MoviesGrid_movies_list__3mh2E"}},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(20),n=c.n(s),r=c(9),o=c(7),l=c.n(o),j=c(2);function _(e){return fetch("https://api.themoviedb.org/3"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()}))}var h=c(21),b=c.n(h),m=c(0);function d(){return Object(m.jsx)("div",{className:b.a.spinner,children:Object(m.jsx)("svg",{children:Object(m.jsx)("circle",{cx:"70",cy:"70",r:"70"})})})}function v(){var e=Object(j.h)().movieId,t=Object(a.useState)(!0),c=Object(r.a)(t,2),i=c[0],s=c[1],n=Object(a.useState)(null),o=Object(r.a)(n,2),h=o[0],b=o[1];if(Object(a.useEffect)((function(){s(!0),_("/movie/".concat(e)).then((function(e){b(e),s(!1)}))}),[e]),i)return Object(m.jsx)(d,{});var v="https://image.tmdb.org/t/p/w500".concat(h.poster_path);return Object(m.jsxs)("div",{className:l.a.container,children:[Object(m.jsx)("div",{className:l.a.col,children:Object(m.jsx)("img",{src:v,className:l.a.movie_image,alt:h.title})}),Object(m.jsxs)("div",{className:"".concat(l.a.col," ").concat(l.a.movie_details),children:[Object(m.jsxs)("p",{className:l.a.title,children:[Object(m.jsx)("strong",{children:"Title:"})," ",h.title," (",h.release_date.slice(0,4),")"]}),Object(m.jsxs)("p",{className:l.a.description,alt:h.overview,children:[Object(m.jsx)("strong",{children:"Description:"})," ",h.overview]}),Object(m.jsxs)("p",{className:l.a.genres,alt:"",children:[Object(m.jsx)("strong",{children:"Genres:"})," ",h.genres.map((function(e){return e.name})).join(", ")]}),Object(m.jsx)("p",{className:l.a.rating,alt:"rating",children:h.vote_average})]})]})}var u=c(8),O=c(12),x=c.n(O);function p(e){var t=e.movie,c="https://image.tmdb.org/t/p/w300".concat(t.poster_path);return Object(m.jsxs)("li",{className:x.a.movie_card,children:[Object(m.jsx)(u.b,{to:"/movies/".concat(t.id),children:Object(m.jsx)("img",{src:c,className:x.a.movie_image,alt:t.title})}),Object(m.jsx)(u.b,{to:"/movies/".concat(t.id),children:Object(m.jsxs)("div",{className:x.a.title,children:[t.title," (",t.release_date.slice(0,4),")"]})}),Object(m.jsx)("div",{className:"rating_section",children:Object(m.jsx)("div",{className:x.a.rating,alt:"rating",children:t.vote_average})})]})}var f=c(23),g=c.n(f);function N(){return new URLSearchParams(Object(j.g)().search)}function M(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(!0),n=Object(r.a)(s,2),o=n[0],l=n[1],j=N().get("search");return Object(a.useEffect)((function(){l(!0),_(j?"/search/movie?query=".concat(j):"/discover/movie").then((function(e){i(e.results),l(!1)}))}),[j]),o?Object(m.jsx)(d,{}):Object(m.jsx)("ul",{className:g.a.movies_list,children:c.map((function(e){return Object(m.jsx)(p,{movie:e},e.id)}))})}var S=c(13),I=c.n(S);function y(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(j.f)(),n=N().get("search");return Object(a.useEffect)((function(){i(n||"")}),[n]),Object(m.jsx)("form",{className:I.a.container,onSubmit:function(e){e.preventDefault(),s.push("/?search=".concat(c))},children:Object(m.jsxs)("div",{className:I.a.search_box,children:[Object(m.jsx)("input",{className:I.a.search_input,type:"text",value:c,onChange:function(e){return i(e.target.value)},placeholder:"Search movies"}),Object(m.jsx)("button",{className:I.a.search_button,type:"submit",children:Object(m.jsx)("i",{className:"material-icons",children:"search"})})]})})}function w(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)(M,{})]})})}c(34);var C=c(18),D=c.n(C);function E(){return Object(m.jsxs)(u.a,{className:D.a.app,children:[Object(m.jsx)("header",{children:Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("h1",{className:D.a.title,children:"Movies"})})}),Object(m.jsx)("main",{children:Object(m.jsxs)(j.c,{children:[Object(m.jsxs)(j.a,{exact:!0,path:"/",children:[" ",Object(m.jsx)(w,{})," "]}),Object(m.jsxs)(j.a,{exact:!0,path:"/movies/:movieId",children:[" ",Object(m.jsx)(v,{})," "]})]})})]})}n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,c){e.exports={container:"MovieDetails_container__3sHOv",col:"MovieDetails_col__2piff",movie_image:"MovieDetails_movie_image__3KSLq",movie_details:"MovieDetails_movie_details__1LhI_",title:"MovieDetails_title__2PELN"}}},[[35,1,2]]]);
//# sourceMappingURL=main.6343d35b.chunk.js.map