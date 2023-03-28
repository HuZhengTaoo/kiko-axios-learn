
export interface SpreadConfig {
  name?: string;
}

export interface SpreadInterface {
  comFunc(comParam: any): any;
  specialFunc1(specialParam:any,comParam:any) : any;
  specialFunc2(specialParam:any,comParam:any) : any;
}

export interface SpreadInstance extends SpreadInterface {
  (config:SpreadConfig): any
}

const dispatchFunc: (comParams: SpreadConfig)=> any = (config) => {
  return config
}

export  class Spread {
  comFunc(comParam: SpreadConfig): any {
    return dispatchFunc(comParam)
  }
  specialFunc1(specialParam: string,comParam:SpreadConfig): any {
    return this._healper('specialFunc1',specialParam,comParam)
  }
  specialFunc2(specialParam: string,comParam:SpreadConfig): any {
    return this._healper('specialFunc2',specialParam,comParam)
  }
  _healper(method:any,specialParam: string,comParam:SpreadConfig){
    return this.comFunc(Object.assign(comParam,{
      method,
      specialParam
    }))
  }
}




export function extend<T,U>(to:T,from:U): T & U {
  for(const key in from){
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

// 创建工厂函数

function createInstance():SpreadInstance {
  const context = new Spread()
  const instance = Spread.prototype.comFunc.bind(context)
  extend(instance,context)
  return instance as SpreadInstance
}

const spreadFunc = createInstance()

export default spreadFunc
