function coinmap_populate_overpass(cluster, coin) {
	$.getJSON('data/data-overpass-' + coin + '.json', function(data) {
		window.total_count += data.length;
		$.each(data, function(key, val) {
			var lat = val['lat'];
			var lon = val['lon'];
			var title = val['title'];
			var icon = window.coinmap_icons[val['icon']];
			var popup = '<b>' + val['title'] + '</b> <a href="http://openstreetmap.org/browse/' + val['type'] + '/' + val['id'] + '" target="_blank">*</a><hr/>';
			if (val['addr']) {
				popup += val['addr'] + '<br/>';
			}
			if (val['city']) {
				popup += val['city'] + '<br/>';
			}
			if (val['country']) {
				popup += val['country'] + '<br/>';
			}
			popup += '<hr/>';
			if (val['web']) {
				popup += 'website: <a href="' + val['web'] + '" target="_blank">' + val['web'] + '</a><br/>';
			}
			if (val['email']) {
				popup += 'email: <a href="mailto:' + val['email'] + '" target="_blank">' + val['email'] + '</a><br/>';
			}
			if (val['phone']) {
				popup += 'phone: ' + val['phone'] + '<br/>';
			}
			if (val['desc']) {
				popup += val['desc'] + '<br/>';
			}
			L.marker([lat, lon], {"title": title, icon: icon}).bindPopup(popup).addTo(cluster);
		});
		document.getElementById("total_count").innerHTML = "<b>" + window.total_count + "</b>";
	});
}
