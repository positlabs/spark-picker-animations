const Time = require('Time')
const Textures = require('Textures')
const CameraInfo = require('CameraInfo')
const R = require('Reactive')
const { picker } = require('NativeUI')

const numIconFrames = 25
const fps = 12

picker.visible = R.not(R.or(CameraInfo.isRecordingVideo, CameraInfo.isCapturingPhoto))

const configure = (index) => {
  picker.configure({
    selectedIndex: 0,
    items: [
      {image_texture: Textures.get(`tile${index.toString().padStart(3, 0)}`)},
      {image_texture: Textures.get(`tile${index.toString().padStart(3, 0)}`)},
      {image_texture: Textures.get(`tile${index.toString().padStart(3, 0)}`)},
      {image_texture: Textures.get(`tile${index.toString().padStart(3, 0)}`)},
      {image_texture: Textures.get(`tile${index.toString().padStart(3, 0)}`)},
    ]
  })
}

let index = 0
Time.setInterval(() => {
  configure(index)
  index = (index + 1) % numIconFrames
}, 1000 / fps)
