import {Component} from "@angular/core"

@Component({
    template: ('../uplaod-modal/upload-modal.component.jade')
})

export class ProgressListener implements EventListenerObject {

    handleEvent(event:ProgressEvent):void {
        var progressbar = document.getElementById("progressbar");
        var progressbarContainer = document.getElementById("progressbarContainer");
        var status = document.getElementById("status");
        var uploadPercentage = Math.ceil(event.loaded / event.total * 100);
        if (uploadPercentage) {
            progressbarContainer.style.display = "block";
            progressbar.style.width = uploadPercentage + '%';
            status.innerHTML = uploadPercentage + '%';
        }

        // if (uploadPercentage == 100) {
        //     document.getElementById("completion-toast").style.display = "block";
        // }
    }
}