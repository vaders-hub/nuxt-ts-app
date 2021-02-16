export default ({$axios, $config, store, redirect}) => {
    const CancelToken = $axios.CancelToken;
    $config.source = CancelToken.source();
    $axios.onError(error => {
      // console.log('onError')
    })
    console.log('$axios',)
    $axios.interceptors.request.use(
      config => {
        config.timeout = 10000
        config.cancelToken = $config.source.token
        console.log('config', typeof config.completeCall)
      return config;
    }, error => {
      return Promise.reject(error);
    });
  
    // window.setTimeout(() => {
    //   console.log('dddd')
    //   $config.source.cancel()  
    // }, 1000)
  
    $axios.interceptors.response.use(
      response => {
        console.log('response', response)
        if (response.status === 200) {
        }
        return response
      }, error => {
        // const errStatus = error.response.status
  
        // switch(errStatus) {
        //   case 404:
        //     break;
        //   case 500:
        //     // code block
        //     break;
        //   default:
        //     // code block
        // }
        return Promise.reject(error);
      }
    )
    
  }