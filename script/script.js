let newSpendingSection = new Vue({
   el: '#new-spending-section',
   data: {
       nstVisible: true,
       nrsmVisible: false,
       //nrmVisible: false,
       nsmVisible: false,
       //v-mode variables for new rapid spendings
       nrsDesc:'',
       //v-mode variables for new spendings
       nsDate: '',
       nsStore: '',
       nsDesc: '',
       nsAmount: '',
       inVisible: false,
       //srs -> stored rapid spendings
       srs: JSON.parse(localStorage.getItem('rapid-spendings'))
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
                "date": Date.now(),
                // humanDate should be removed once it is clarified how v-for handle intermediate values
                "humanDate": new Date().toString(),
                "desc": this.nrsDesc,
                "trialFlag": false
            }
             //srs -> stored rapid spendings
            //let srs = JSON.parse(localStorage.getItem('rapid-spendings'));
            if (this.srs!=null)
                this.srs.push(rs);
            else 
                this.srs = [rs]
            localStorage.removeItem('rapid-spendings');
            localStorage.setItem('rapid-spendings',JSON.stringify(this.srs));
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
        srs: newSpendingSection.srs
    }
})
