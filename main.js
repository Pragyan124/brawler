const {crawlPage} = require('./crawl.js')
const {printReport} = require('./report.js')

async function main(){
        if(process.argv.length < 3){
            console.log("no website provided")
            process.exit(1)
        }
        if(process.argv.length > 3){
            console.log("too many cmd line args")
            process.exit(1)
        }


        ### ##   ### ##     ##     ##   ##  ####     ### ###  ### ##   
        ##  ##   ##  ##     ##    ##   ##   ##       ##  ##   ##  ##  
        ##  ##   ##  ##   ## ##   ##   ##   ##       ##       ##  ##  
        ## ##    ## ##    ##  ##  ## # ##   ##       ## ##    ## ##   
        ##  ##   ## ##    ## ###  # ### #   ##       ##       ## ##   
        ##  ##   ##  ##   ##  ##   ## ##    ##  ##   ##  ##   ##  ##  
       ### ##   #### ##  ###  ##  ##   ##  ### ###  ### ###  #### ##  






       ___       ___    _____   ______         ____   ______       ____     ___       ___   _____        _____   ______    
       (  (       )  )  / ___/  (_   _ \       / ___) (   __ \     (    )   (  (       )  ) (_   _)      / ___/  (   __ \   
        \  \  _  /  /  ( (__      ) (_) )     / /      ) (__) )    / /\ \    \  \  _  /  /    | |       ( (__     ) (__) )  
         \  \/ \/  /    ) __)     \   _/     ( (      (    __/    ( (__) )    \  \/ \/  /     | |        ) __)   (    __/   
          )   _   (    ( (        /  _ \     ( (       ) \ \  _    )    (      )   _   (      | |   __  ( (       ) \ \  _  
          \  ( )  /     \ \___   _) (_) )     \ \___  ( ( \ \_))  /  /\  \     \  ( )  /    __| |___) )  \ \___  ( ( \ \_)) 
           \_/ \_/       \____\ (______/       \____)  )_) \__/  /__(  )__\     \_/ \_/     \________/    \____\  )_) \__/  
                                                                                                                            
       
                                                      


        const baseURL = process.argv[2]
        
        console.log(`starting crawl of ${baseURL}`)
        const pages = await crawlPage(baseURL, baseURL, {})
        printReport(pages)
        
}


main()