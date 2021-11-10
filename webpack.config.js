const path =require("path")

module.exports={
    //始めに読み込むfile
    entry:"./src/index.tsx",
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader",
                exclude:/node_modules/,
            },
        ],
    },
    resolve:{
        extensions:[".js",".ts",".tsx"],
    },
    //出力するfileの設定
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index.js",
        publicPath:"dist/",
    }
}