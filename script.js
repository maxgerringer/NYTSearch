

// var resultsNum = whatever the target ID is for this value 1 - 10
// var parameters = $(#____).val();



var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + parameters + "&api-key=CmRGv5uORB1iKsoqgznmKSg17NrXIyZL"

$.ajax({
   url: queryUrl,
   method: "GET"
}).then(function(response) {
   console.log(response);
});

