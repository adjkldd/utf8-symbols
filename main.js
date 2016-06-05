function createTile(characterCount, start, tableContainer) {

    var p = "";
    for (var i = 0; i <= characterCount; ++i) {
        var unicode = (start + i).toString(16);
        p += "<li><p>u+" + unicode + "</p><p class='char'>&#x" + unicode + ";</p></li>";
    }
    tableContainer.append(p);

}

function createScriptTable(start, end) {
    var characterCount = end - start;
    if (isNaN(characterCount) || characterCount <= 0)
        return;
    var tableContainer = $(".table-container ul");
    tableContainer.children("li").remove();


    createTile(characterCount, start, tableContainer);

}

$(".code-block").on("click", "a", function () {
    var start = $(this).attr("data-start"),
        end = $(this).attr("data-end"),
        startInput = $("#start"),
        endInput = $("#end");
    if (start !== startInput.val() || end !== endInput.val()) {
        startInput.val(start);
        endInput.val(end);
    }
    $(".code-block a").css("background-color", "white");
    $(this).css("background-color", "skyblue");

});


var $unicodeBlocks = {
    "Basic Latin": ["0000", "007F"],
    "Latin-1 Supplement": ["0080", "00FF"],
    "Latin Extended-A": ["0100", "017F"],
    "Latin Extended-B": ["0180", "024F"],
    "IPA Extensions": ["0250", "02AF"],
    "Spacing Modifier Letters": ["02B0", "02FF"],
    "Combining Diacritical Marks": ["0300", "036F"],
    "Greek and Coptic": ["0370", "03FF"],
    "Cyrillic": ["0400", "04FF"],
    "Cyrillic Supplement": ["0500", "052F"],
    "Armenian": ["0530", "058F"],
    "Hebrew": ["0590", "05FF"],
    "Arabic": ["0600", "06FF"],
    "Syriac": ["0700", "074F"],
    "Arabic Supplement": ["0750", "077F"],
    "Thaana": ["0780", "07BF"],
    "NKo": ["07C0", "07FF"],
    "Samaritan": ["0800", "083F"],
    "Mandaic": ["0840", "085F"],
    "Arabic Extended-A": ["08A0", "08FF"],
    "Devanagari": ["0900", "097F"],
    "Bengali": ["0980", "09FF"],
    "Gurmukhi": ["0A00", "0A7F"],
    "Gujarati": ["0A80", "0AFF"],
    "Oriya": ["0B00", "0B7F"],
    "Tamil": ["0B80", "0BFF"],
    "Telugu": ["0C00", "0C7F"],
    "Kannada": ["0C80", "0CFF"],
    "Malayalam": ["0D00", "0D7F"],
    "Sinhala": ["0D80", "0DFF"],
    "Thai": ["0E00", "0E7F"],
    "Lao": ["0E80", "0EFF"],
    "Tibetan": ["0F00", "0FFF"],
    "Myanmar": ["1000", "109F"],
    "Georgian": ["10A0", "10FF"],
    "Hangul Jamo": ["1100", "11FF"],
    "Ethiopic": ["1200", "137F"],
    "Ethiopic Supplement": ["1380", "139F"],
    "Cherokee": ["13A0", "13FF"],
    "Unified Canadian Aboriginal Syllabics": ["1400", "167F"],
    "Ogham": ["1680", "169F"],
    "Runic": ["16A0", "16FF"],
    "Tagalog": ["1700", "171F"],
    "Hanunoo": ["1720", "173F"],
    "Buhid": ["1740", "175F"],
    "Tagbanwa": ["1760", "177F"],
    "Khmer": ["1780", "17FF"],
    "Mongolian": ["1800", "18AF"],
    "Unified Canadian Aboriginal Syllabics Extended": ["18B0", "18FF"],
    "Limbu": ["1900", "194F"],
    "Tai Le": ["1950", "197F"],
    "New Tai Lue": ["1980", "19DF"],
    "Khmer Symbols": ["19E0", "19FF"],
    "Buginese": ["1A00", "1A1F"],
    "Tai Tham": ["1A20", "1AAF"],
    "Combining Diacritical Marks Extended": ["1AB0", "1AFF"],
    "Balinese": ["1B00", "1B7F"],
    "Sundanese": ["1B80", "1BBF"],
    "Batak": ["1BC0", "1BFF"],
    "Lepcha": ["1C00", "1C4F"],
    "Ol Chiki": ["1C50", "1C7F"],
    "Sundanese Supplement": ["1CC0", "1CCF"],
    "Vedic Extensions": ["1CD0", "1CFF"],
    "Phonetic Extensions": ["1D00", "1D7F"],
    "Phonetic Extensions Supplement": ["1D80", "1DBF"],
    "Combining Diacritical Marks Supplement": ["1DC0", "1DFF"],
    "Latin Extended Additional": ["1E00", "1EFF"],
    "Greek Extended": ["1F00", "1FFF"],
    "General Punctuation": ["2000", "206F"],
    "Superscripts and Subscripts": ["2070", "209F"],
    "Currency Symbols": ["20A0", "20CF"],
    "Combining Diacritical Marks for Symbols": ["20D0", "20FF"],
    "Letterlike Symbols": ["2100", "214F"],
    "Number Forms": ["2150", "218F"],
    "Arrows": ["2190", "21FF"],
    "Mathematical Operators": ["2200", "22FF"],
    "Miscellaneous Technical": ["2300", "23FF"],
    "Control Pictures": ["2400", "243F"],
    "Optical Character Recognition": ["2440", "245F"],
    "Enclosed Alphanumerics": ["2460", "24FF"],
    "Box Drawing": ["2500", "257F"],
    "Block Elements": ["2580", "259F"],
    "Geometric Shapes": ["25A0", "25FF"],
    "Miscellaneous Symbols": ["2600", "26FF"],
    "Dingbats": ["2700", "27BF"],
    "Miscellaneous Mathematical Symbols-A": ["27C0", "27EF"],
    "Supplemental Arrows-A": ["27F0", "27FF"],
    "Braille Patterns": ["2800", "28FF"],
    "Supplemental Arrows-B": ["2900", "297F"],
    "Miscellaneous Mathematical Symbols-B": ["2980", "29FF"],
    "Supplemental Mathematical Operators": ["2A00", "2AFF"],
    "Miscellaneous Symbols and Arrows": ["2B00", "2BFF"],
    "Glagolitic": ["2C00", "2C5F"],
    "Latin Extended-C": ["2C60", "2C7F"],
    "Coptic": ["2C80", "2CFF"],
    "Georgian Supplement": ["2D00", "2D2F"],
    "Tifinagh": ["2D30", "2D7F"],
    "Ethiopic Extended": ["2D80", "2DDF"],
    "Cyrillic Extended-A": ["2DE0", "2DFF"],
    "Supplemental Punctuation": ["2E00", "2E7F"],
    "CJK Radicals Supplement": ["2E80", "2EFF"],
    "Kangxi Radicals": ["2F00", "2FDF"],
    "Ideographic Description Characters": ["2FF0", "2FFF"],
    "CJK Symbols and Punctuation": ["3000", "303F"],
    "Hiragana": ["3040", "309F"],
    "Katakana": ["30A0", "30FF"],
    "Bopomofo": ["3100", "312F"],
    "Hangul Compatibility Jamo": ["3130", "318F"],
    "Kanbun": ["3190", "319F"],
    "Bopomofo Extended": ["31A0", "31BF"],
    "CJK Strokes": ["31C0", "31EF"],
    "Katakana Phonetic Extensions": ["31F0", "31FF"],
    "Enclosed CJK Letters and Months": ["3200", "32FF"],
    "CJK Compatibility": ["3300", "33FF"],
    "CJK Unified Ideographs Extension A": ["3400", "4DBF"],
    "Yijing Hexagram Symbols": ["4DC0", "4DFF"],
    "CJK Unified Ideographs": ["4E00", "9FFF"],
    "Yi Syllables": ["A000", "A48F"],
    "Yi Radicals": ["A490", "A4CF"],
    "Lisu": ["A4D0", "A4FF"],
    "Vai": ["A500", "A63F"],
    "Cyrillic Extended-B": ["A640", "A69F"],
    "Bamum": ["A6A0", "A6FF"],
    "Modifier Tone Letters": ["A700", "A71F"],
    "Latin Extended-D": ["A720", "A7FF"],
    "Syloti Nagri": ["A800", "A82F"],
    "Common Indic Number Forms": ["A830", "A83F"],
    "Phags-pa": ["A840", "A87F"],
    "Saurashtra": ["A880", "A8DF"],
    "Devanagari Extended": ["A8E0", "A8FF"],
    "Kayah Li": ["A900", "A92F"],
    "Rejang": ["A930", "A95F"],
    "Hangul Jamo Extended-A": ["A960", "A97F"],
    "Javanese": ["A980", "A9DF"],
    "Myanmar Extended-B": ["A9E0", "A9FF"],
    "Cham": ["AA00", "AA5F"],
    "Myanmar Extended-A": ["AA60", "AA7F"],
    "Tai Viet": ["AA80", "AADF"],
    "Meetei Mayek Extensions": ["AAE0", "AAFF"],
    "Ethiopic Extended-A": ["AB00", "AB2F"],
    "Latin Extended-E": ["AB30", "AB6F"],
    "Cherokee Supplement": ["AB70", "ABBF"],
    "Meetei Mayek": ["ABC0", "ABFF"],
    "Hangul Syllables": ["AC00", "D7AF"],
    "Hangul Jamo Extended-B": ["D7B0", "D7FF"],
    "High Surrogates": ["D800", "DB7F"],
    "High Private Use Surrogates": ["DB80", "DBFF"],
    "Low Surrogates": ["DC00", "DFFF"],
    "Private Use Area": ["E000", "F8FF"],
    "CJK Compatibility Ideographs": ["F900", "FAFF"],
    "Alphabetic Presentation Forms": ["FB00", "FB4F"],
    "Arabic Presentation Forms-A": ["FB50", "FDFF"],
    "Variation Selectors": ["FE00", "FE0F"],
    "Vertical Forms": ["FE10", "FE1F"],
    "Combining Half Marks": ["FE20", "FE2F"],
    "CJK Compatibility Forms": ["FE30", "FE4F"],
    "Small Form Variants": ["FE50", "FE6F"],
    "Arabic Presentation Forms-B": ["FE70", "FEFF"],
    "Halfwidth and Fullwidth Forms": ["FF00", "FFEF"],
    "Specials": ["FFF0", "FFFF"],
    "Linear B Syllabary": ["10000", "1007F"],
    "Linear B Ideograms": ["10080", "100FF"],
    "Aegean Numbers": ["10100", "1013F"],
    "Ancient Greek Numbers": ["10140", "1018F"],
    "Ancient Symbols": ["10190", "101CF"],
    "Phaistos Disc": ["101D0", "101FF"],
    "Lycian": ["10280", "1029F"],
    "Carian": ["102A0", "102DF"],
    "Coptic Epact Numbers": ["102E0", "102FF"],
    "Old Italic": ["10300", "1032F"],
    "Gothic": ["10330", "1034F"],
    "Old Permic": ["10350", "1037F"],
    "Ugaritic": ["10380", "1039F"],
    "Old Persian": ["103A0", "103DF"],
    "Deseret": ["10400", "1044F"],
    "Shavian": ["10450", "1047F"],
    "Osmanya": ["10480", "104AF"],
    "Elbasan": ["10500", "1052F"],
    "Caucasian Albanian": ["10530", "1056F"],
    "Linear A": ["10600", "1077F"],
    "Cypriot Syllabary": ["10800", "1083F"],
    "Imperial Aramaic": ["10840", "1085F"],
    "Palmyrene": ["10860", "1087F"],
    "Nabataean": ["10880", "108AF"],
    "Hatran": ["108E0", "108FF"],
    "Phoenician": ["10900", "1091F"],
    "Lydian": ["10920", "1093F"],
    "Meroitic Hieroglyphs": ["10980", "1099F"],
    "Meroitic Cursive": ["109A0", "109FF"],
    "Kharoshthi": ["10A00", "10A5F"],
    "Old South Arabian": ["10A60", "10A7F"],
    "Old North Arabian": ["10A80", "10A9F"],
    "Manichaean": ["10AC0", "10AFF"],
    "Avestan": ["10B00", "10B3F"],
    "Inscriptional Parthian": ["10B40", "10B5F"],
    "Inscriptional Pahlavi": ["10B60", "10B7F"],
    "Psalter Pahlavi": ["10B80", "10BAF"],
    "Old Turkic": ["10C00", "10C4F"],
    "Old Hungarian": ["10C80", "10CFF"],
    "Rumi Numeral Symbols": ["10E60", "10E7F"],
    "Brahmi": ["11000", "1107F"],
    "Kaithi": ["11080", "110CF"],
    "Sora Sompeng": ["110D0", "110FF"],
    "Chakma": ["11100", "1114F"],
    "Mahajani": ["11150", "1117F"],
    "Sharada": ["11180", "111DF"],
    "Sinhala Archaic Numbers": ["111E0", "111FF"],
    "Khojki": ["11200", "1124F"],
    "Multani": ["11280", "112AF"],
    "Khudawadi": ["112B0", "112FF"],
    "Grantha": ["11300", "1137F"],
    "Tirhuta": ["11480", "114DF"],
    "Siddham": ["11580", "115FF"],
    "Modi": ["11600", "1165F"],
    "Takri": ["11680", "116CF"],
    "Ahom": ["11700", "1173F"],
    "Warang Citi": ["118A0", "118FF"],
    "Pau Cin Hau": ["11AC0", "11AFF"],
    "Cuneiform": ["12000", "123FF"],
    "Cuneiform Numbers and Punctuation": ["12400", "1247F"],
    "Early Dynastic Cuneiform": ["12480", "1254F"],
    "Egyptian Hieroglyphs": ["13000", "1342F"],
    "Anatolian Hieroglyphs": ["14400", "1467F"],
    "Bamum Supplement": ["16800", "16A3F"],
    "Mro": ["16A40", "16A6F"],
    "Bassa Vah": ["16AD0", "16AFF"],
    "Pahawh Hmong": ["16B00", "16B8F"],
    "Miao": ["16F00", "16F9F"],
    "Kana Supplement": ["1B000", "1B0FF"],
    "Duployan": ["1BC00", "1BC9F"],
    "Shorthand Format Controls": ["1BCA0", "1BCAF"],
    "Byzantine Musical Symbols": ["1D000", "1D0FF"],
    "Musical Symbols": ["1D100", "1D1FF"],
    "Ancient Greek Musical Notation": ["1D200", "1D24F"],
    "Tai Xuan Jing Symbols": ["1D300", "1D35F"],
    "Counting Rod Numerals": ["1D360", "1D37F"],
    "Mathematical Alphanumeric Symbols": ["1D400", "1D7FF"],
    "Sutton SignWriting": ["1D800", "1DAAF"],
    "Mende Kikakui": ["1E800", "1E8DF"],
    "Arabic Mathematical Alphabetic Symbols": ["1EE00", "1EEFF"],
    "Mahjong Tiles": ["1F000", "1F02F"],
    "Domino Tiles": ["1F030", "1F09F"],
    "Playing Cards": ["1F0A0", "1F0FF"],
    "Enclosed Alphanumeric Supplement": ["1F100", "1F1FF"],
    "Enclosed Ideographic Supplement": ["1F200", "1F2FF"],
    "Miscellaneous Symbols and Pictographs": ["1F300", "1F5FF"],
    "Emoticons": ["1F600", "1F64F"],
    "Ornamental Dingbats": ["1F650", "1F67F"],
    "Transport and Map Symbols": ["1F680", "1F6FF"],
    "Alchemical Symbols": ["1F700", "1F77F"],
    "Geometric Shapes Extended": ["1F780", "1F7FF"],
    "Supplemental Arrows-C": ["1F800", "1F8FF"],
    "Supplemental Symbols and Pictographs": ["1F900", "1F9FF"],
    "CJK Unified Ideographs Extension B": ["20000", "2A6DF"],
    "CJK Unified Ideographs Extension C": ["2A700", "2B73F"],
    "CJK Unified Ideographs Extension D": ["2B740", "2B81F"],
    "CJK Unified Ideographs Extension E": ["2B820", "2CEAF"],
    "CJK Compatibility Ideographs Supplement": ["2F800", "2FA1F"],
    "Tags": ["E0000", "E007F"],
    "Variation Selectors Supplement": ["E0100", "E01EF"]
    // "Supplementary Private Use Area-A": ["F0000", "FFFFF"],
    // "Supplementary Private Use Area-B": ["100000", "10FFFF"]
};

var $prevStart = 0,
    $prevEnd = 0;

var $totalBlocks = 0,
    $index = 1,
    $blockString = "",
    $prevChild = undefined,
    $intervalId;

function fadeInOneByOne() {
    $(".code-block a:nth-of-type(" + $index + ")").fadeIn('slow');
    ++$index;
    if ($index > $totalBlocks)
        clearInterval($intervalId);
}


$('input[type="search"]').change(function () {
    if ($(this).val() === "")
        return;
    var blockString = $blockString.toLowerCase();
    var keyword = $(this).val().toLowerCase();
    var index = blockString.indexOf(keyword);
    var aTagStart = blockString.lastIndexOf("<a", index);
    var aTagEnd   = blockString.indexOf("</a>", index);
    var aTag = $blockString.substring(aTagStart, aTagEnd + 4);
    var relativeOffsetTop = 0;
    for (var i = 1; i <= $totalBlocks; ++i) {
        var child = $('.code-block a:nth-of-type(' + i + ')');

        if (child.html() === $(aTag).html()) {
            $(".code-block a").css("background-color", "white");
           if ($prevChild === undefined) {
               $(".code-block").animate({scrollTop: child.offset().top - $(this).offset().top - $(this).outerHeight()}, 1000);
           } else {
               $(".code-block").animate({scrollTop: $(".code-block").scrollTop() + child.offset().top - $prevChild.offset().top}, 1000);
           }
            $("#start").val(child.attr("data-start"));
            $("#end").val(child.attr("data-end"));
            $prevChild = child;

            child.css("background-color", "deeppink");
            return;
        }

        relativeOffsetTop += child.height();
    }
});

$(function () {

    $.each($unicodeBlocks, function (key, value) {
        var start = value[0],
            end = value[1];
        var aTag = '<a href="#" ' +
            'data-start="' + start + '" data-end="' + end + '" title="[' + start + ',' + end + ']">' + key + '</a>';
        $blockString += aTag;
        $(aTag).css("display", "none").appendTo(".code-block");
    });

    $totalBlocks = $('.code-block a').length;


    setInterval(fadeInOneByOne, 80);
    setInterval(getStartAndEnd, 500);
});


function getStartAndEnd() {
    var start = parseInt($("#start").val(), 16),
        end = parseInt($("#end").val(), 16);

    if ($prevStart !== start || $prevEnd !== end) {
        createScriptTable(start, end);
        $prevStart = start;
        $prevEnd = end;
    }
}


// window.addEventListener("DOMContentLoaded", createHanUnicodeTable, false);