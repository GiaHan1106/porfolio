const path = require("path");

module.exports = {
    entry: "./src/index.js", // File entry của bạn
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Chỉ định các file JS và JSX
                exclude: /node_modules/, // Loại trừ node_modules
                use: {
                    loader: "babel-loader", // Sử dụng Babel để xử lý các file JS và JSX
                },
            },
            {
                test: /\.(jpe?g|png|gif)$/i, // Xử lý ảnh
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "images/",
                        },
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70,
                            },
                            optipng: {
                                enabled: true,
                                optimizationLevel: 5,
                            },
                            pngquant: {
                                quality: [0.6, 0.8],
                            },
                            gifsicle: {
                                interlaced: true,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"], // Đảm bảo Webpack nhận diện các file .js và .jsx
    },
    mode: "development", // Chế độ sản xuất
};
