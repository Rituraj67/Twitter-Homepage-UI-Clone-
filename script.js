function main(){
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".rightfeed").style.right=`0%`;
        document.querySelector(".rightfeed").style.display=`block`;
        document.querySelector(".rightfeed").style.position=`fixed`;
        document.querySelector(".rightfeed").style.backgroundColor=`black`;
        document.querySelector(".close").style.display=`block`;

        
        document.querySelector(".close").addEventListener("click",()=>{
            document.querySelector(".rightfeed").style.right=`-100%`;
            document.querySelector(".rightfeed").style.display=`hidden`;
        })

        
    });

    
}


main()

