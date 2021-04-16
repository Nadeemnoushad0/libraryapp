const express = require('express');
const app = express();
const port = process.env.port || 3000;

const nav=[
    {
        link:'/home',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/adminbook',name: 'Add Book'
    },
    {
        link:'/adminauthor',name: 'Add Author'
    },
    {
        link:'/',name: 'Log Out'
    }
];

const navi=[
    {
        link:'/signup',name: 'Signup'
    }
];

const booksRouter = require('./src/routes/bookroutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authorsRouter = require('./src/routes/authorroutes')(nav);
const adminauthorRouter = require('./src/routes/adminauthorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const homeRouter = require('./src/routes/homeRoutes')(nav);

app.use(express.urlencoded({extented:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/adminbook',adminRouter);
app.use('/authors',authorsRouter);
app.use('/adminauthor',adminauthorRouter);
app.use('/signup',signupRouter);
app.use('/home',homeRouter);

app.get('/',function(req,res){
    res.render('index',
    {
        navi,
        title:'Library'
    });
});

app.get('/invalid',function(req,res){
    res.render('invalid',
    {
        navi,
        title: 'Library'
    });
});


app.listen(port,()=>{console.log("Server ready at "+ port);});
 