// mock data based on a reddit thread

export const response = [
  {

  },
  {
    data: {
      children: [
        {
          data:{
            author: 'pete',
            depth: 0,
            replies: {
              data: {
                children: [
                  {
                    data: {
                      author: 'rob',
                      depth: 1
                    }
                  }
                ]
              }

            }
          }
        },
        {
          data:{
            author: 'steve',
            depth: 0,
            replies: {
              data: {
                children: [
                  {
                    data: {
                      author: 'tom',
                      depth: 1
                    }
                  },
                  {
                    data: {
                      author: 'chives',
                      depth: 1,
                      replies: {
                        data: {
                          children: [
                            {
                              data: {
                                author: 'patrick',
                                depth: 2,
                                children: []
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
]
