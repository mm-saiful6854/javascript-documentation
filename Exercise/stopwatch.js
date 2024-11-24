function StopWatch(){
    let startTime=0, stopTime=-1, duration=0;
    this.start = ()=>{
        if(stopTime<0) throw new Error("stopwatch is running");
        startTime = new Date().getTime();
        stopTime =-1;
    }

    this.stop = ()=>{
        if(stopTime>0) throw new Error("stopwatch is already stopped.");
        if(startTime===0) throw new Error("stopwatch is not started yet.");
        stopTime = new Date().getTime();
        duration+=(stopTime - startTime)/1000.0;
        startTime=0;
    }

    this.reset = ()=>{
        startTime= 0;
        stopTime = -1;
        duration=0;
    }

    Object.defineProperty(this, 'duration',{
       get:()=>{
        return duration;
       } 
    });
}