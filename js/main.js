document.addEventListener('DOMContentLoaded', function() {
    $('.main').css('opacity','1');
    $('.main').css('pointer-events','auto');
    $("#preloader").delay(500).fadeOut("slow");
});



kendo.pdf.defineFont({ 
    "DejaVu Sans"             : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
    "DejaVu Sans|Bold"        : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
    "DejaVu Sans|Bold|Italic" : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
    "DejaVu Sans|Italic"      : "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
});
let globaltype = 'Report'; 
let id = '';

function getPDF(selector) {
    kendo.drawing.drawDOM($(selector), {
    }).then(function(group) {
        kendo.drawing.pdf.saveAs(group, id+"_"+globaltype+'.pdf');
    });
}

const course = [
    {
        name: 'Basic Economics.',
        code: 'ECO 201',
        semester: '3rd'
    },
    {
        name: 'Data Structure.',
        code: 'CSE 221',
        semester: '3rd'
    },
    {
        name: 'Data Structure Laboratory.',
        code: 'CSE 222',
        semester: '3rd'
    },
    {
        name: 'Digital Electronics.',
        code: 'EEE 311',
        semester: '3rd'
    },
    {
        name: 'Digital Electronics Laboratory.',
        code: 'EEE 312',
        semester: '3rd'
    },
    {
        name: 'Engineering Mathematics III.',
        code: 'MAT 201',
        semester: '3rd'
    },
    {
        name: 'Object Oriented Programming.',
        code: 'CSE 211',
        semester: '3rd'
    },
    {
        name: 'Object Oriented Programming Laboratory.',
        code: 'CSE 212',
        semester: '3rd'
    },
    {
        name: 'Algorithm Design And Analysis.',
        code: 'CSE 225',
        semester: '4th'
    },
    {
        name: 'Algorithm Design And Analysis Laboratory.',
        code: 'CSE 226',
        semester: '4th'
    },
    {
        name: 'Database Management System.',
        code: 'CSE 237',
        semester: '4th'
    },
    {
        name: 'Database Management System Laboratory.',
        code: 'CSE 238',
        semester: '4th'
    },
    {
        name: 'Engineering Mathematics IV.',
        code: 'MAT 203',
        semester: '4th'
    },
    {
        name: 'Industrial & Business Management.',
        code: 'MGT 203',
        semester: '4th'
    },
    {
        name: 'Signals & Systems.',
        code: 'EEE 201',
        semester: '4th'
    },
    {
        name: 'Signals & Systems Laboratory.',
        code: 'EEE 202',
        semester: '4th'
    },
    {
        name: 'Communication Engineering.',
        code: 'EEE 309',
        semester: '5th'
    },
    {
        name: 'Communication Engineering Laboratory.',
        code: 'EEE 310',
        semester: '5th'
    },
    {
        name: 'Computational Methods for Engineering Problems.',
        code: 'CSE 301',
        semester: '5th'
    },
    {
        name: 'Computational Methods for Engineering Problems Laboratory.',
        code: 'CSE 302',
        semester: '5th'
    },
    {
        name: 'Microprocessors & Microcontrollers.',
        code: 'EEE 371',
        semester: '5th'
    },
    {
        name: 'Microprocessors & Microcontrollers Laboratory.',
        code: 'EEE 372',
        semester: '5th'
    },
    {
        name: 'Organizational Behavior.',
        code: 'MGT 251',
        semester: '5th'
    },
    {
        name: 'Software Engineering & Information System Design.',
        code: 'CSE 305',
        semester: '5th'
    },
    {
        name: 'Software Engineering & Information System Design Laboratory.',
        code: 'CSE 306',
        semester: '5th'
    },
    {
        name: 'Artificial Intelligence.',
        code: 'CSE 317',
        semester: '6th'
    },
    {
        name: 'Artificial Intelligence Laboratory.',
        code: 'CSE 318',
        semester: '6th'
    },
    {
        name: 'Computer Network.',
        code: 'CSE 367',
        semester: '6th'
    },
    {
        name: 'Computer Network Laboratory.',
        code: 'CSE 368',
        semester: '6th'
    },
    {
        name: 'Computer Organization & Architecture.',
        code: 'CSE 337',
        semester: '6th'
    },
    {
        name: 'Data Communication.',
        code: 'CSE 364',
        semester: '6th'
    },
    {
        name: 'Operating Systems.',
        code: 'CSE 333',
        semester: '6th'
    },
    {
        name: 'Operating Systems Laboratory.',
        code: 'CSE 334',
        semester: '6th'
    },
    {
        name: 'Software Development.',
        code: 'CSE 338',
        semester: '6th'
    },
    {
        name: 'Control Systems.',
        code: 'EEE 313',
        semester: '7th'
    },
    {
        name: 'Control Systems Laboratory.',
        code: 'EEE 314',
        semester: '7th'
    },
    {
        name: 'Computer Graphics & Image Processing.',
        code: 'CSE 455',
        semester: '7th'
    },
    {
        name: 'Computer Graphics & Image Processing Laboratory.',
        code: 'CSE 456',
        semester: '7th'
    },
    {
        name: 'Neural Network & Fuzzy Logic.',
        code: 'CSE 451',
        semester: '7th'
    },
    {
        name: 'Neural Network & Fuzzy Logic Laboratory.',
        code: 'CSE 452',
        semester: '7th'
    },
    {
        name: 'Network and Computer Security.',
        code: 'CSE 437',
        semester: '7th'
    },
    {
        name: 'Theory of Computation.',
        code: 'CSE 309',
        semester: '7th'
    },
    {
        name: 'Technical Writing & Presentation.',
        code: 'ENG 401',
        semester: '7th'
    },
    {
        name: 'Compiler Construction.',
        code: 'CSE 453',
        semester: '8th'
    },
    {
        name: 'Compiler Construction Laboratory.',
        code: 'CSE 454',
        semester: '8th'
    },
    {
        name: 'Machine Learning.',
        code: 'CSE 457',
        semester: '8th'
    },
    {
        name: 'Machine Learning Laboratory. ',
        code: 'CSE 458',
        semester: '8th'
    },
    {
        name: 'Pattern Recognition.',
        code: 'CSE 459',
        semester: '8th'
    },
    {
        name: 'Pattern Recognition Laboratory. ',
        code: 'CSE 460',
        semester: '8th'
    },
    {
        name: 'Contemporary Course of Computer Science.',
        code: 'CSE 481',
        semester: '8th'
    },
    {
        name: 'Contemporary Course of Computer Science Laboratory. ',
        code: 'CSE 482',
        semester: '8th'
    }
]
function clearText(elementId) {
    var spanElement = document.getElementById(elementId);
    var spanText = spanElement.textContent;
    if (spanText == "Click to edit" || spanText == "Click" || spanText == "S"){
        spanElement.textContent = "";
    }
}

$(document).ready(function(){
    // window.onload = function() {
       
    // };
    // $(window).on('load', function(){
        
    // });
    

    function selectcourese(type){
        if(type != "Select...."){
            let filter = course.filter(
                (obj) => {
                    return obj.semester == type;
                }
            )
            $("#course").empty();
            if(filter.length > 0){
                $("#course").append("<option selected>Select.....</option>")
                $.each(filter, function(index,option) {
                    var newOption = $('<option>', {
                        value: option.code,
                        text: option.name + " ("+ option.code +")"
                    });
                    
                    $("#course").append(newOption);
                });
            }else{
                $("#course").append("<option selected>Not available.Click on preview to edit.</option>")
            }
            $("#ssem").text(type);
            localStorage.setItem('semester', type);
        }else{
            $("#course").empty();
            $("#course").append("<option selected>Select.....</option>");
        }
    }

    if (localStorage.getItem('name') !== null) {
        var name = localStorage.getItem('name');
        $("#sname").text(name);
        $("#iname").val(name);
    }
    if (localStorage.getItem('id') !== null) {
        var name = localStorage.getItem('id');
        $("#sid").text(name);
        $("#iid").val(name);
        id = name;
    }
    if (localStorage.getItem('batch') !== null) {
        var name = localStorage.getItem('batch');
        $("#sbatch").text(name);
        $("#ibatch").val(name);
    }
    if (localStorage.getItem('section') !== null) {
        var name = localStorage.getItem('section');
        $("#ssection").text(name);
        $("#isection").val(name);
    }
    if (localStorage.getItem('dept') !== null) {
        var name = localStorage.getItem('dept');
        $(".d-name").text(name);
        $("#idept-name").val(name);
    }
    if (localStorage.getItem('semester') !== null) {
        var type = localStorage.getItem('semester');
        $('#semester').val(type);
        $("#ssem").text(type);
        selectcourese(type);
    }


    $(".type").change(function(){
        var type = $(this).val();
        $("#rnumber").text(type + " Number");
        $("#rname").text(type + " Name");
        $("#rname-font").text(type + " Name Font Size");
        $(".info").text(type + " Info");
        if(type == "Report"){
            $("#Performance").show();
            $(".performance-date").show();
            $("#type1, #type2").text("Report");
            globaltype = type;
        }else{
            $("#Performance").hide();
            $(".performance-date").css('display','none');
            $("#type1, #type2").text("Assignment");
            globaltype = type;
        }
    });

    $("#semester").change(function(){
        var type = $(this).val();
        selectcourese(type);
    });


    $("#course").change(function(){
        var type = $(this).val();
        if(type != "Select....."){
            let filter = course.filter(
                (obj) => {
                    return obj.code == type;
                }
            )
            $.each(filter, function(index,option) {
                if(option.code == type){
                    $("#c-name").text(option.name);
                }
            });
            console.log(filter);
            $("#c-code").text(type);

        }
    });

    $("#irnum").change(function(){
        var name = $(this).val();
        if(name < 10 ){
            $("#r-number").text('0'+name);
        }else{
            $("#r-number").text(name);
        }
    });

    $("#irnum").keyup(function(){
        var name = $(this).val();
        if(name < 10 ){
            $("#r-number").text('0'+name);
        }else{
            $("#r-number").text(name);
        }
    });

    $("#irname").keyup(function(){
        var name = $(this).val();
        $("#r-name").text(name);
    });

    function formatDate(inputDate) {
        const parts = inputDate.split('-');
        if (parts.length !== 3) {
            throw new Error('Invalid date format');
        }
    
        const day = parts[2];
        const month = parts[1];
        const year = parts[0];
    
        return `${day}-${month}-${year}`;
    }

    $("#isub").change(function(){
        var date = $(this).val();
        date = formatDate(date)
        $("#rsub").text(date);
    });

    $("#iper").change(function(){
        var date = $(this).val();
        date = formatDate(date)
        $("#rper").text(date);
    });

    $("#iname").keyup(function(){
        var name = $(this).val();
        if(name.length > 20 && name.length < 23 ){
            $("#sname").css('font-size','20px');
        }else if(name.length >= 23){
            $("#sname").css('font-size','19px');
        }
        else{
            $("#sname").css('font-size','23px');
        }
        $("#sname").text(name);
        localStorage.setItem('name', name);
    });

    $("#iid").keyup(function(){
        var name = $(this).val();
        $("#sid").text(name);
        localStorage.setItem('id', name);
        id = name;
    });

    $("#ibatch").keyup(function(){
        var name = $(this).val();
        $("#sbatch").text(name);
        localStorage.setItem('batch', name);
    });

    $("#isection").keyup(function(){
        var name = $(this).val();
        $("#ssection").text(name);
        localStorage.setItem('section', name);
    });

    $("#year").keyup(function(){
        var year = $(this).val();
        $("#syear").text(year);
    });

    $("#idept-name").keyup(function(){
        var name = $(this).val();
        if(name.length > 45){
            $(".d-name").css('font-size','20px');
        }
        else{
            $(".d-name").css('font-size','22px');
        }
        $(".d-name").text(name);
        localStorage.setItem('dept', name);
    });

    $('#theme-save').click(function(){
        $("#theme-modal").modal("hide");
    });

    $("#saveinfo").change(function(){
        var isChecked = $(this).is(':checked');
        if (isChecked) {
            var name = $("#iname").val();
            var id = $("#iid").val();
            var batch = $("#ibatch").val();
            var section = $("#isection").val();
            var dept = $("#idept-name").val();
            var semester = $("#semester").val();
            localStorage.setItem('name', name);
            localStorage.setItem('id', id);
            localStorage.setItem('batch', batch);
            localStorage.setItem('section', section);
            localStorage.setItem('dept', dept);
            localStorage.setItem('semester', semester);
            // var values = {
            //     name: name,
            //     id: id,
            //     batch: batch,
            //     section: section,
            //     dept: dept,
            //     semester: semester
            // };
            // localStorage.setItem('storedValues', JSON.stringify(values));
        } else {
            localStorage.clear();
        }
    });

    var year = new Date().getFullYear()
    $("#year").val(year);
    $("#syear").text(year);

    $("#download").click(function() {
        getPDF('#content');
        $("#love").css('display','block').delay(4000).fadeOut("slow");
    });

    $("#resetrinfo").click(function() {
        $('#rinfo').trigger("reset");
        // $("#infoform").get(0).reset();
    });

    $("#resetstinfo").click(function() {
        $('#idept-name').val('');
        $('#stinfo').trigger("reset");
        // $("#infoform").get(0).reset();
    });
});