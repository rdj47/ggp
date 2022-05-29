let newSpendingSection = new Vue({
   el: '#new-spending-section',
   data: {
       //flags to make tag visible or not
       nstVisible: true,
       nrsmVisible: false,
       nsmVisible: false,
       //v-mode vars for new rapid spendings
       nrsDesc:'',
       catList: '',
       //v-mode vars for new spendings
       nsDate: '',
       nsStore: '',
       nsDesc: '',
       sCat: JSON.parse(localStorage.getItem('categories')),
       nsAmount: '',
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
            console.log('srs: '+srs);
            localStorage.removeItem('rapid-spendings');
            localStorage.setItem('rapid-spendings',JSON.stringify(srs));
            rapidSpendigsSection.queryRapidSpendings();

        },
        addSpending: function() {
            console.log("start addSpending");            
            let s = {
                desc: nsDesc
            }
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
