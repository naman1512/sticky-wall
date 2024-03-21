// get dash board

exports.dashboard = async (req, res) => {
    
    const locals = {
        title: "Dashboard",
        description: "A notes app created in node.Js and EJS"
    }
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
      });
    }