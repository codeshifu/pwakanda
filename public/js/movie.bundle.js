!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t){const n=e=>`\n      <small>${e}</small>\n      `,r=(e,t="")=>`\n      <div class='${t}'>There are no ${e} available</div>\n    `,i=document.querySelector(".hero"),o=document.querySelector(".release_date"),a=document.querySelector(".movie_title"),s=document.querySelector(".movie_poster"),c=document.querySelector(".sypnosis"),l=document.querySelector(".genres"),d=document.querySelector(".reviews_container"),u=document.querySelector(".trailers_container"),m=document.querySelector(".casts");(()=>{const e=window.location.pathname.trim().split("/")[3].trim();fetch(`/api/movie/${e}`).then(e=>e.json()).then(e=>{const{release_date:t,original_title:p,title:v,poster:f,backdrop:y,overview:h,genres:b,cast:g,reviews:w,trailers:S}=e;let $=new Date(t).toDateString().split(" ").splice(1);$=`${$[0]} ${$[1]}, ${$[2]}`,o.textContent="Released: "+$,a.textContent=p||v;const j=b.map((e,t)=>{if(t+1===b.length)return n(e.name);return n(`${e.name} <span class='glyphicon glyphicon-arrow-right' aria-hidden='true'></span> `)}).join("").trim();l.innerHTML="Genres: "+j,i.setAttribute("style",`background-image: url(${y})`),s.setAttribute("src",f),c.textContent=h,d.innerHTML=w.length?w.map(e=>(e=>{const{author:t,content:n}=e||{};return`\n            <div class="col-md-12 review">\n              <div class="row">\n                  <h5>${t}</h5>\n                  <p>${n}</p>\n              </div>\n            </div>\n        `})(e)).join("").trim():r("reviews"),u.innerHTML=S.length?S.map(e=>(e=>{const{key:t}=e;return`\n          <div class="col-md-4 trailer">\n              <div class="embed-responsive embed-responsive-16by9">\n                  <iframe \n                    class="embed-responsive-item"\n                    id="ytplayer"\n                    type="text/html"\n                    src="https://www.youtube.com/embed/${t}"></iframe>\n              </div>\n        </div>\n      `})(e)).join("").trim():r("trailer");const _=document.createElement("div");_.innerHTML=g.length?g.map(e=>(e=>{const{character:t,name:n,profile:r}=e||{};return`\n        <div class="media cast">\n            <div class="media-left media-middle">\n                <div>\n                    <a href="javascript:void()">\n                        <img class="media-object" src="${r}" width="64">\n                    </a>\n                </div>\n            </div>\n            <div class="media-body">\n                <h5 class="media-heading">${n}</h5>\n                <p>as ${t}</p>\n            </div>\n        </div>\n        `})(e)).join("").trim():r("cast"),m.appendChild(_)})})()}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vdmllLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiY3JlYXRlR2VucmUiLCJnZW5yZSIsImVtcHR5RGF0YSIsInRleHQiLCJjbGFzc0xpc3QiLCJfaGVybyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9yZWxlYXNlX2RhdGUiLCJfbW92aWVUaXRsZSIsIl9tb3ZpZVBvc3RlciIsIl9zeXBub3NpcyIsIl9nZW5yZXMiLCJfcmV2aWV3cyIsIl90cmFpbGVycyIsIl9jYXN0IiwiaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibW92aWUiLCJyZWxlYXNlX2RhdGUiLCJvcmlnaW5hbF90aXRsZSIsInRpdGxlIiwicG9zdGVyIiwiYmFja2Ryb3AiLCJvdmVydmlldyIsImdlbnJlcyIsImNhc3QiLCJyZXZpZXdzIiwidHJhaWxlcnMiLCJkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInNwbGljZSIsInRleHRDb250ZW50IiwiZ2VucmVIdG1sIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJqb2luIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwicmV2aWV3IiwiYXV0aG9yIiwiY29udGVudCIsImNyZWF0ZVJldmlldyIsInRyYWlsZXIiLCJjcmVhdGVUcmFpbGVyIiwiY2FzdE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiY2hhcmFjdGVyIiwicHJvZmlsZSIsImNyZWF0ZUNhc3QiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxhQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5Q1QsWUFBQSxFQUFBSyxVQUN6QyxFQUFBRSxHQUFBLGlCQUFBRixFQUFBLFFBQUFNLEtBQUFOLEVBQUFyQixFQUFBVSxFQUFBZSxFQUFBRSxFQUFBLFNBQUFBLEdBQWdILE9BQUFOLEVBQUFNLElBQXFCQyxLQUFBLEtBQUFELElBQ3JJLE9BQUFGLEdBSUF6QixFQUFBNkIsRUFBQSxTQUFBMUIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBcUIsV0FDQSxXQUEyQixPQUFBckIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQWlCLEVBQUFDLEdBQXNELE9BQUFqQixPQUFBa0IsVUFBQUMsZUFBQTFCLEtBQUF1QixFQUFBQyxJQUd0RC9CLEVBQUFrQyxFQUFBLEdBSUFsQyxJQUFBbUMsRUFBQSxxQkNsRkEsTUFBQUMsRUFBQUMscUJBRWVBLG9CQWtEZkMsRUFBQSxDQUFBQyxFQUFBQyxFQUFBLDRCQUVvQkEsbUJBQTJCRCwwQkFJL0NFLEVBQUFDLFNBQUFDLGNBQUEsU0FDQUMsRUFBQUYsU0FBQUMsY0FBQSxpQkFDQUUsRUFBQUgsU0FBQUMsY0FBQSxnQkFDQUcsRUFBQUosU0FBQUMsY0FBQSxpQkFDQUksRUFBQUwsU0FBQUMsY0FBQSxhQUNBSyxFQUFBTixTQUFBQyxjQUFBLFdBQ0FNLEVBQUFQLFNBQUFDLGNBQUEsc0JBQ0FPLEVBQUFSLFNBQUFDLGNBQUEsdUJBQ0FRLEVBQUFULFNBQUFDLGNBQUEsVUFFQSxNQUNBLE1BQUFTLEVBQUFDLE9BQUFDLFNBQUFDLFNBQ0FDLE9BQ0FDLE1BQUEsUUFDQUQsT0FFQUUsb0JBQXNCTixLQUN0Qk8sS0FBQUMsS0FBQUMsUUFDQUYsS0FBQUcsSUFDQSxNQUFBQyxhQUNBQSxFQUFBQyxlQUNBQSxFQUFBQyxNQUNBQSxFQUFBQyxPQUNBQSxFQUFBQyxTQUNBQSxFQUFBQyxTQUNBQSxFQUFBQyxPQUNBQSxFQUFBQyxLQUNBQSxFQUFBQyxRQUNBQSxFQUFBQyxTQUNBQSxHQUNPVixFQUVQLElBQUFXLEVBQUEsSUFBQUMsS0FBQVgsR0FDQVksZUFDQWxCLE1BQUEsS0FDQW1CLE9BQUEsR0FDQUgsS0FBZ0JBLEVBQUEsTUFBV0EsRUFBQSxPQUFZQSxFQUFBLEtBRXZDN0IsRUFBQWlDLFlBQUEsYUFBQUosRUFFQTVCLEVBQUFnQyxZQUFBYixHQUFBQyxFQUVBLE1BQUFhLEVBQUFULEVBQ0FVLElBQUEsQ0FBQTFELEVBQUEyRCxLQUNBLEdBQUFBLEVBQUEsSUFBQVgsRUFBQVksT0FBQSxPQUFBN0MsRUFBQWYsRUFBQVYsTUFHQSxPQUFBeUIsS0FBZ0NmLEVBQUFWLG9GQUVoQ3VFLEtBQUEsSUFDQTFCLE9BQ0FSLEVBQUFtQyxVQUFBLFdBQUFMLEVBRUFyQyxFQUFBMkMsYUFBQSxpQ0FBMkRqQixNQUUzRHJCLEVBQUFzQyxhQUFBLE1BQUFsQixHQUNBbkIsRUFBQThCLFlBQUFULEVBRUFuQixFQUFBa0MsVUFBQVosRUFBQVUsT0FDQVYsRUFDQVEsSUFBQTFELEdBaEhBZ0UsS0FDQSxNQUFBQyxPQUFTQSxFQUFBQyxXQUFrQkYsTUFDM0IsOEdBR3dCQyxnQ0FDREMsNkRBMEd2QkMsQ0FBQW5FLElBQ0E2RCxLQUFBLElBQ0ExQixPQUNBbEIsRUFBQSxXQUVBWSxFQUFBaUMsVUFBQVgsRUFBQVMsT0FDQVQsRUFDQU8sSUFBQTFELEdBM0dBb0UsS0FDQSxNQUFBOUQsSUFBU0EsR0FBTThELEVBQ2YseVVBT3lEOUQsOERBa0d6RCtELENBQUFyRSxJQUNBNkQsS0FBQSxJQUNBMUIsT0FDQWxCLEVBQUEsV0FFQSxNQUFBcUQsRUFBQWpELFNBQUFrRCxjQUFBLE9BRUFELEVBQUFSLFVBQUFiLEVBQUFXLE9BQ0FYLEVBQ0FTLElBQUFULEdBckdBQSxLQUNBLE1BQUF1QixVQUFTQSxFQUFBbEYsT0FBQW1GLFdBQTJCeEIsTUFDcEMsZ09BS3lEd0IseUtBS2JuRixpQ0FDcEJrRix1REF3RnhCRSxDQUFBekIsSUFDQVksS0FBQSxJQUNBMUIsT0FDQWxCLEVBQUEsUUFFQWEsRUFBQTZDLFlBQUFMLE1BdkVBIiwiZmlsZSI6Im1vdmllLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImNvbnN0IGNyZWF0ZUdlbnJlID0gZ2VucmUgPT4ge1xuICByZXR1cm4gYFxuICAgICAgPHNtYWxsPiR7Z2VucmV9PC9zbWFsbD5cbiAgICAgIGA7XG59O1xuXG5jb25zdCBjcmVhdGVSZXZpZXcgPSByZXZpZXcgPT4ge1xuICBjb25zdCB7IGF1dGhvciwgY29udGVudCB9ID0gcmV2aWV3IHx8IHt9O1xuICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiByZXZpZXdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGg1PiR7YXV0aG9yfTwvaDU+XG4gICAgICAgICAgICAgICAgICA8cD4ke2NvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xufTtcblxuY29uc3QgY3JlYXRlVHJhaWxlciA9IHRyYWlsZXIgPT4ge1xuICBjb25zdCB7IGtleSB9ID0gdHJhaWxlcjtcbiAgcmV0dXJuIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgdHJhaWxlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgICAgICAgICAgICAgICA8aWZyYW1lIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwieXRwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtrZXl9XCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG59O1xuXG5jb25zdCBjcmVhdGVDYXN0ID0gY2FzdCA9PiB7XG4gIGNvbnN0IHsgY2hhcmFjdGVyLCBuYW1lLCBwcm9maWxlIH0gPSBjYXN0IHx8IHt9O1xuICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEgY2FzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiJHtwcm9maWxlfVwiIHdpZHRoPVwiNjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj4ke25hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICA8cD5hcyAke2NoYXJhY3Rlcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG59O1xuXG5jb25zdCBlbXB0eURhdGEgPSAodGV4dCwgY2xhc3NMaXN0ID0gJycpID0+IHtcbiAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9JyR7Y2xhc3NMaXN0fSc+VGhlcmUgYXJlIG5vICR7dGV4dH0gYXZhaWxhYmxlPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IF9oZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcbmNvbnN0IF9yZWxlYXNlX2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVsZWFzZV9kYXRlJyk7XG5jb25zdCBfbW92aWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV90aXRsZScpO1xuY29uc3QgX21vdmllUG9zdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX3Bvc3RlcicpO1xuY29uc3QgX3N5cG5vc2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN5cG5vc2lzJyk7XG5jb25zdCBfZ2VucmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlcycpO1xuY29uc3QgX3Jldmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3c19jb250YWluZXInKTtcbmNvbnN0IF90cmFpbGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbGVyc19jb250YWluZXInKTtcbmNvbnN0IF9jYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc3RzJyk7XG5cbigoKSA9PiB7XG4gIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnLycpWzNdXG4gICAgLnRyaW0oKTtcblxuICBmZXRjaChgL2FwaS9tb3ZpZS8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKG1vdmllID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVsZWFzZV9kYXRlLFxuICAgICAgICBvcmlnaW5hbF90aXRsZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHBvc3RlcixcbiAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgIG92ZXJ2aWV3LFxuICAgICAgICBnZW5yZXMsXG4gICAgICAgIGNhc3QsXG4gICAgICAgIHJldmlld3MsXG4gICAgICAgIHRyYWlsZXJzXG4gICAgICB9ID0gbW92aWU7XG5cbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUocmVsZWFzZV9kYXRlKVxuICAgICAgICAudG9EYXRlU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnNwbGljZSgxKTtcbiAgICAgIGRhdGUgPSBgJHtkYXRlWzBdfSAke2RhdGVbMV19LCAke2RhdGVbMl19YDtcblxuICAgICAgX3JlbGVhc2VfZGF0ZS50ZXh0Q29udGVudCA9ICdSZWxlYXNlZDogJyArIGRhdGU7XG5cbiAgICAgIF9tb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gb3JpZ2luYWxfdGl0bGUgfHwgdGl0bGU7XG5cbiAgICAgIGNvbnN0IGdlbnJlSHRtbCA9IGdlbnJlc1xuICAgICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBnZW5yZXMubGVuZ3RoKSByZXR1cm4gY3JlYXRlR2VucmUodmFsdWUubmFtZSk7XG4gICAgICAgICAgY29uc3QgZ2x5cGhpY29uID1cbiAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHQnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+IFwiO1xuICAgICAgICAgIHJldHVybiBjcmVhdGVHZW5yZShgJHt2YWx1ZS5uYW1lfSAke2dseXBoaWNvbn1gKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgICAgIC50cmltKCk7XG4gICAgICBfZ2VucmVzLmlubmVySFRNTCA9ICdHZW5yZXM6ICcgKyBnZW5yZUh0bWw7XG5cbiAgICAgIF9oZXJvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2Ryb3B9KWApO1xuXG4gICAgICBfbW92aWVQb3N0ZXIuc2V0QXR0cmlidXRlKCdzcmMnLCBwb3N0ZXIpO1xuICAgICAgX3N5cG5vc2lzLnRleHRDb250ZW50ID0gb3ZlcnZpZXc7XG5cbiAgICAgIF9yZXZpZXdzLmlubmVySFRNTCA9IHJldmlld3MubGVuZ3RoXG4gICAgICAgID8gcmV2aWV3c1xuICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiBjcmVhdGVSZXZpZXcodmFsdWUpKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgIDogZW1wdHlEYXRhKCdyZXZpZXdzJyk7XG5cbiAgICAgIF90cmFpbGVycy5pbm5lckhUTUwgPSB0cmFpbGVycy5sZW5ndGhcbiAgICAgICAgPyB0cmFpbGVyc1xuICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiBjcmVhdGVUcmFpbGVyKHZhbHVlKSlcbiAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICA6IGVtcHR5RGF0YSgndHJhaWxlcicpO1xuXG4gICAgICBjb25zdCBjYXN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBjYXN0Tm9kZS5pbm5lckhUTUwgPSBjYXN0Lmxlbmd0aFxuICAgICAgICA/IGNhc3RcbiAgICAgICAgICAgIC5tYXAoY2FzdCA9PiBjcmVhdGVDYXN0KGNhc3QpKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgIDogZW1wdHlEYXRhKCdjYXN0Jyk7XG5cbiAgICAgIF9jYXN0LmFwcGVuZENoaWxkKGNhc3ROb2RlKTtcbiAgICB9KTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9