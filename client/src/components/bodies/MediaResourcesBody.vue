<template>
    <div class="big-group" style="display: flex; align-items: center;">
        <div>
            <div class="title">Lectures</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhN7ydN2kL8lX8rpAQlQRf1hWHsSMQPbF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div>
            <div class="title">Book Launches</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhN7ydN2kL8knOBD2NjGRdhwChccPZpFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div>
            <div class="title">Interviews</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhN7ydN2kL8l1NI5FpAyAtOk5GqZ2sDTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div>
            <div class="title">Conference Panels</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhN7ydN2kL8kK8yV25IfRMb7cFteqpNtV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div class="documentary-container">
            <div class="title">Documentaries</div>
            <a href="https://www.smithsonianchannel.com/episodes/9ja72x/searching-for-secrets-berlin-season-1-ep-4" target="_blank">
                <img class="documentary-image" style="" src="@/../public/assets/documentary.webp">
            </a>
            <div style="font-size: 14px;">
                The Foundation provided photos and archival material for this documentary by the Smithsonian. 
            </div>
        </div>
    </div>
</template>

<style>

.documentary-container{
    width:560px;
    height: auto;
}

@media only screen and (max-width: 900px) {

    iframe,
    .documentary-container,
    .documentary-container img {
        width: 300px;
        height: auto;
    }
}
</style>