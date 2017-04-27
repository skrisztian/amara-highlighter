javascript: (function() {
    function supportsQuerySelectors() {
        return typeof document['querySelector'] == 'function' && typeof document['querySelectorAll'] == 'function'
    }

    function checkSubsSpeed(e, t, n) {
        var r = n.replace('<br>', '');
        var i = r.length;
        var s = (t - e) / 1e3;
        if (i / s <= 21) {
            return 0
        } else {
            return i / s
        }
    }

    function checkSubsLength(e) {
        var t = e.split('<br>');
        var n = 0;
        for (var r = 0; r < t.length; r++) {
            if (t[r].length > 42) {
                n = 1
            }
        }
        return n
    }

    function timeValue(e) {
        var t = e.replace(/:/g, '.');
        var n = t.split('.');
        var r = new Date(n[0] * 1e3 * 60 * 60 + n[1] * 1e3 * 60 + n[2] * 1e3 + n[3] * 1);
        return r
    }
    if (!supportsQuerySelectors()) {
        alert('Sorry, this will not work in this browser')
    } else {
        var liList = document.querySelectorAll('#working-subtitle-set li');
        var textSpanList = document.querySelectorAll('#working-subtitle-set span.subtitle-text');
        var langList = editorData.languages;
        for (var i = 0; i < langList.length; i++) {
            if (langList[i].editingLanguage) {
                var xmlString = langList[i].versions[langList[i].versions.length - 1].subtitles
            }
        }
        var xmlDoc = $.parseXML(xmlString);
        var pList = xmlDoc.getElementsByTagName('p');
        for (var i = 0; i < textSpanList.length; i++) {
            var lengthError = checkSubsLength(textSpanList[i].innerHTML);
            var speedError = checkSubsSpeed(timeValue(pList[i].getAttribute('begin')), timeValue(pList[i].getAttribute('end')), textSpanList[i].innerHTML);
            if (lengthError) {
                liList[i].style.backgroundColor = '#ffff99'
            } else {
                liList[i].style.backgroundColor = '#f3f4f5'
            }
            if (speedError) {
                textSpanList[i].style.color = 'red'
            } else {
                textSpanList[i].style.color = '#3c3c3d'
            }
        }
    }
})();