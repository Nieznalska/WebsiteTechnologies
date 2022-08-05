window.onload = function () {
    memeApp.loadData();
}
let memeApp = {

    memeData: null, //data from server 
    memeNumber: 0, // no. meme from array
    memeTitleDomEl: null,
    memeImgDomEl: null, //picture from server 

    loadData: function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => memeApp.dataReady(data));
    },
    dataReady: function (data) {
        console.log(data);
        memeApp.memeData = data.data.memes;
        memeApp.memeTitleDomEl = document.getElementsByClassName("meme_title")[0];
        memeApp.memeImgDomEl = document.querySelector(".meme_img"); // handle

        document.addEventListener('keydown',(e) =>{
            switch(e.key){
                case "ArrowDown":
                console.log("Down");
                memeApp.previousMeme();
                break;
                case "ArrowUp":
                console.log("Up");
                memeApp.nextMeme();
                break;
                case "ArrowLeft":  
                console.log("Down");
                memeApp.previousMeme();
                break;
                case "ArrowRight":
                console.log("Up");
                memeApp.nextMeme();
                break;
                default:
                console.log("Zły klawisz");

            }

        });
        this.nextMeme();
    },
    nextMeme: function () {
        this.memeNumber++;
        this.setDomData();
         if(this.memeNumber>=this.memeData.length)
            this.memeNumber=0;
         
    },
    previousMeme: function () {
        this.memeNumber--;
        this.setDomData();
        if(this.memeNumber<0)
        this.memeNumber=this.memeData.length-1;
    },
    setDomData: function () {
        let imgData=this.memeData[this.memeNumber];
        this.memeTitleDomEl.innerHTML=imgData.name;
        this.memeImgDomEl.src=imgData.url;

        document.title="Meme #" + this.memeNumber;
    }

};