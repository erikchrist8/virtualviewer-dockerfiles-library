if(typeof beforeVirtualViewerInit!=="function"){function beforeVirtualViewerInit(){alfrescoBeforeInit()}}if(typeof afterVirtualViewerInit!=="function"){function afterVirtualViewerInit(){alfrescoAfterInit()}}function alfrescoBeforeInit(){virtualViewer.initViaURL()}function alfrescoAfterInit(){var c=new URI(window.location.href);var b=c.query(true)["clientInstanceId"];var a={};if(b){a=JSON.parse(b)}var d=$(".vvToggleFullScreen");d.toggle(!!a.enableToggleFullScreen);virtualViewer.setCallback("onLoadUsername",function(){virtualViewer.setUsername(a.username)})}function toggleFullScreen(){var a=$(".vvToggleFullScreen > .icon");if(a.hasClass("minimize")){parent.postMessage("vvMinimize","*")}else{parent.postMessage("vvMaximize","*")}a.toggleClass("minimize")};