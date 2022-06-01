import axios from "axios"

export function uploadImage(img) {
    let body = new FormData()
    body.set('key','4b76823349508cfe6987b62ea7b72eb8')
    body.append('image', img)

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    }).then((result) => {
      return result.data.data.image.url;
    })
  }


