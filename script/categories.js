let newCategorySection = new Vue({
    el: '#new-category',
    data: {
        catName: ''
    },
    methods: {
        addCategory: function() {
            console.log("start addCategory");
            let cat = {
                //catId must be implemented
                //"id": catIdAcum,
                "date": Date.now(),
                "category": this.catName,
                "trialFlag": false
            };
            let sCat = JSON.parse(localStorage.getItem('categories'));
            if (sCat!=null) 
                sCat.push(cat);
            else
                sCat = [cat];
            localStorage.removeItem('categories');
            localStorage.setItem('categories',JSON.stringify(sCat));
            catList.queryCategories();
        }
    }
});

let catList = new Vue({
    el: '#categories-list',
    data: {
        sCat: JSON.parse(localStorage.getItem('categories')),
    },
    methods: {
        queryCategories: function () {
            this.sCat= JSON.parse(localStorage.getItem('categories'));
        }
    }       
});

