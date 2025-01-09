export const SlideUp = (delay) =>{
    return{
        hidden: {
            opacity: 0,
            y:100
        },
        visible:{
            opacity: 1,
            y:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}

export const SlideLeft = (delay) =>{
    return{
        hidden: {
            opacity: 0,
            x:100
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}
export const SlideRight = (delay) =>{
    return{
        hidden: {
            opacity: 0,
            x:-100
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}

export const Rotate = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 300,        
        rotate: 90,    
      },
      visible: {
        opacity: 1,
        x: 0,          
        rotate: 0,     
        transition: {
          duration: 1, 
          delay: delay, 
        },
      },
    };
  };