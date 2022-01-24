import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unityplanets.component.html',
  styleUrls: ['./unityplanets.component.css']
})
export class UnityplanetsComponent implements OnInit {

  gameInstance: any;
  progress = 0;
  isReady = false;

  constructor() { }

  ngOnInit(): void {
    
    var buildUrl = "assets/Planets/Build";
    var config = {
      dataUrl: buildUrl + "/Planets.data",
      frameworkUrl: buildUrl + "/Planets.framework.js",
      codeUrl: buildUrl + "/Planets.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "GaryBrwn",
      productName: "Planets",
      productVersion: "0.1",
      devicePixelRatio: 0
    };

    let container = document.querySelector("#unity-container") || new Element();
    var canvas : HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
    var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
    var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
    var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();
    var mobileWarning : HTMLElement = document.querySelector("#unity-mobile-warning") || new HTMLElement();

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
      config.devicePixelRatio = 1;
      mobileWarning.style.display = "block";
      setTimeout(() => {
        mobileWarning.style.display = "none";
      }, 5000);
    } else {
      canvas.style.width = "600px";
      canvas.style.height = "400px";
    }
    loadingBar.style.display = "block";

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });


  }

}