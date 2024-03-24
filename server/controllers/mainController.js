// get home page

exports.homepage = async (req, res) => {
    
        const locals = {
            title: "Sticky Wall",
            description: "A notes app created in node.Js and EJS"
        }
        res.render('index', {
            locals,
            layout: '../views/layouts/front-page'
          });
        }

// get about

exports.about = async (req, res) => {
    
        const locals = {
            title: "About - Sticky Wall",
            description: "A notes app created in node.Js and EJS"
        }
        res.render('about', locals);
}
// get features

exports.features = async (req, res) => {
    
        const locals = {
            title: "Features - Sticky Wall",
            description: "A notes app created in node.Js and EJS"
        }
        res.render('features', locals);
}
// get FAQ

exports.faq = async (req, res) => {
    
        const locals = {
            title: "FAQ - Sticky Wall",
            description: "A notes app created in node.Js and EJS"
        }
        res.render('faq', locals);
}