let newSpendingSection = new Vue({
   el: '#new-spending-section',
   data: {
       //flags to make tag visible or not
       nstVisible: true,
       nrsmVisible: false,
       nsmVisible: false,
       //v-mode vars for new rapid spendings
       nrsDesc:'',
       //v-mode vars for new spendings
       nsDate: '',
       nsStore: '',
       nsDesc: '',
       nsCat:  JSON.parse(localStorage.getItem('categories'))[0].category,
       nsCatList: JSON.parse(localStorage.getItem('categories')),
       nsHab: true,
       nsAmount: '',
       nsInst: false,
       nsInstNum: null,
       inVisible: false
   },
   methods: {
        showRapidSpendingMenu: function() {
            console.log("start showRapidSpendingMenu()");
            this.nstVisible=false;
            this.nrsmVisible=true;
            this.nsmVisible=false;
            rapidSpendigsSection.rssVisible=false;
        },
        showSpendingMenu: function() {
            console.log("start showSpendingMenu()");
            this.nstVisible=false;
            this.nrsmVisible=false;
            this.nsmVisible=true;
            rapidSpendigsSection.rssVisible=false;
        },
        closeSpendingMenu: function() {
            console.log("start closeSpendingMenu");
            this.nstVisible=true;
            this.nrsmVisible=false;
            this.nsmVisible=false;
            rapidSpendigsSection.rssVisible=true;
        },
        showInstallmentNumberSelect: function() {
            console.log("start showInstallmentNumberSelect");
            this.inVisible=true;
        },
        hideInstallmentNumberSelect: function() {
            console.log("start hideInstallmentNumberSelect");
            this.inVisible=false;
        },
        addRapidSpending: function() {
            console.log("start addRapindSpending");
            let rs = {
                //id for rs must be implemented
                "date": Date.now(),
                // humanDate should be removed once it is clarified how v-for handle intermediate values
                "humanDate": new Date().toString(),
                "desc": this.nrsDesc,
                "trialFlag": false
            }
            console.log('rs object: ');
            console.log(rs);
            // srs -> stored rapid savings
            let srs = JSON.parse(localStorage.getItem('rapid-spendings'));
            if (srs!=null)
                srs.push(rs);
            else 
                srs = [rs];
           localStorage.removeItem('rapid-spendings');
            localStorage.setItem('rapid-spendings',JSON.stringify(srs));
            rapidSpendigsSection.queryRapidSpendings();

        },
        addSpending: function() {
            console.log("start addSpending");  
            console.log(this.nsDate)      
            let s = {
                date: this.nsDate,
                store: this.nsStore,
                desc: this.nsDesc,
                cat: this.nsCat,
                hab: this.nsHab,
                amount: this.nsAmount,
                inst: this.nsInst,
                instNum: this.nsInstNumns,
                trialFlag: false
            }
            console.log('s object: ');
            console.log(s);
            let ss = JSON.parse(localStorage.getItem('spendings'));
            if (ss!=null)
                ss.push(s);
            else 
                ss = [s];
            localStorage.removeItem('spendings');
            localStorage.setItem('spendings',JSON.stringify(ss));
        }
    }
});

let rapidSpendigsSection = new Vue({
    el: '#rapid-spendings',
    data:
    {
        rssVisible: true,
        srs: JSON.parse(localStorage.getItem('rapid-spendings')),
    },
    methods: {
        queryRapidSpendings: function () {
            this.srs = JSON.parse(localStorage.getItem('rapid-spendings'));
        }
    }
})
