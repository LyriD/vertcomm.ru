var image_added;!function(e){var t,n,i,r,o,a;e(document).ready(function(){var n=e("#page_image_picker");a=n.data("input-type"),o="wym"==a,e("#custom_images_tab a").click(function(){if(!n.data("size-applied")&&o){var t=e(".page_part:first .wym_box"),i=e(".page_part:first iframe");n.css({height:t.height(),width:t.width()}).data("size-applied",!0).corner("tr 5px").corner("bottom 5px").find(".wym_box").css({backgroundColor:"white",height:i.height()+e(".page_part:first .wym_area_top").height()-parseInt(e(".wym_area_top .label_inline_with_link a").css("lineHeight")),width:i.width()-20,"border-color":i.css("border-top-color"),"border-style":i.css("border-top-style"),"border-width":i.css("border-top-width"),padding:"0px 10px 0px 10px"})}}),e("#page_images li textarea:hidden").each(function(t){var n=e(this).attr("name"),i=e(this);i.attr("data-old-id",i.attr("id")),i.attr("name","ignore_me_"+t),i.attr("id","ignore_me_"+t);var r=e("<input>").addClass("caption").attr("type","hidden").attr("name",n).attr("id",i.attr("data-old-id")).val(i.val());i.parents("li").first().append(r)}),t(),e(".page-images-caption-modal").hide(),r=e("#page_images .js-page-images-template").detach()}),t=function(){o&&WYMeditor.onload_functions.push(function(){e(".wym_box").css({width:null})}),e("#page_images").sortable({tolerance:"pointer",placeholder:"placeholder",cursor:"drag",items:"li",stop:i}),e("#page_images").on("mouseenter mouseleave","li",function(t){var r=e(this),o=r.find(".image_actions");if("mouseenter"==t.type){if(0==o.length){o=e("<div class='image_actions'></div>");var a=e("<img src='/assets/refinery/icons/delete-a77f3c3c125b0817085648f284c98938.png' width='16' height='16' />");if(a.appendTo(o),a.click(function(){e(this).parents("li").first().remove(),i()}),r.find("textarea.page_caption").length>0){var s=e("<img src='/assets/refinery/icons/user_comment-ea7f170d5e671fd53838ee45351de181.png' width='16' height='16' class='caption' />");s.appendTo(o),s.click(n)}else o.addClass("no_captions");o.appendTo(r)}o.show()}else"mouseleave"==t.type&&o.hide()}),i()},image_added=function(n){var i=r.clone(),o=e(n).attr("id").replace("image_","");i.find("input:hidden:first").val(o),e("<img />").attr({title:e(n).attr("title"),alt:e(n).attr("alt"),src:e(n).attr("data-grid")}).appendTo(i),i.attr("id","image_"+o).removeClass("empty"),i.appendTo(e("#page_images")),t()},n=function(){var t=e(this).closest("li"),n=t.find(".page-images-caption-modal > textarea"),i=n.parent(),r={textarea:{width:400,height:"auto"},wym:{width:928,height:530}};i.find(".js-page-images-done").on("click",function(){i.dialog("close")});var s=function(){o&&n.data("wymeditor").update(),e("li.current_caption_list_item").removeClass("current_caption_list_item"),e("#"+n.attr("data-old-id")).val(n.val()),i.dialog("destroy")};t.addClass("current_caption_list_item"),i.dialog({title:"Add Caption",modal:!0,resizable:!1,autoOpen:!0,width:r[a].width,height:r[a].height,close:s}),o?n.addClass("wymeditor active_rotator_wymeditor widest").wymeditor(wymeditor_boot_options):n.show()},i=function(){e("#page_images li textarea:hidden").each(function(t,n){var i=e(n).attr("name").split("_");i[2]=""+t,e(n).attr("name",i.join("_")),e(n).attr("id",e(n).attr("id").replace(/_\d/,"_"+t)),e(n).attr("data-old-id",e(n).attr("data-old-id").replace(/_\d_/,"_"+t+"_").replace(/_\d/,"_"+t))}),e("#page_images li").each(function(t,n){e("input:hidden",n).each(function(){var n=e(this),i=n.attr("name").split("]");i[1]="["+t,n.attr("name",i.join("]")),n.attr("id",n.attr("id").replace(/_\d_/,"_"+t+"_").replace(/_\d/,"_"+t))})})}}(jQuery);