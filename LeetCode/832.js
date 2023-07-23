// Flipping an image

var flipAndInvertImage = function (image) {

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length / 2; j++) {
            const temp = image[i][j]
            image[i][j] = image[i][image[i].length - 1 - j]
            image[i][image[i].length - 1 - j] = temp
            // invert the number
            image[i][j] === 1 ? image[i][j] = 0 : image[i][j] = 1
            image[i][image[i].length - 1 - j] === 1 ? image[i][image[i].length - 1 - j] = 0 : image[i][image[i].length - 1 - j] = 1
        }
        if (image[i].length % 2 !== 0) {
            let temp = Math.floor(image[i].length / 2)
            image[i][temp] === 1 ? image[i][temp] = 0 : image[i][temp] = 1
        }
    }
    return image

};

const image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]

console.log(flipAndInvertImage(image)) // output => [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 1, 1, 1 ] ]