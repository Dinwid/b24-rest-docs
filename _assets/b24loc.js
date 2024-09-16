const localization = {

    github: "https://github.com/bitrix-tools/b24-rest-docs/",
    searchUrl: "https://util.1c-bitrix.ru/documentation/rest/search.php?q=",
    searchCaption: "Начните искать нужные статьи",
    searchIcon: `
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6536 62.8186C52.8102 65.3422 48.2117 66.8102 43.2703 66.8102C29.7864 66.8102 18.8555 55.8793 18.8555 42.3953C18.8555 28.9114 29.7864 17.9805 43.2703 17.9805C56.7543 17.9805 67.6852 28.9114 67.6852 42.3953C67.6852 47.3367 66.2172 51.9352 63.6936 55.7786L76.3834 68.4684C77.8804 69.9654 77.8804 72.3925 76.3834 73.8895L74.7645 75.5084C73.2675 77.0054 70.8404 77.0054 69.3434 75.5084L56.6536 62.8186ZM60.7095 42.3953C60.7095 52.0267 52.9017 59.8345 43.2703 59.8345C33.6389 59.8345 25.8311 52.0267 25.8311 42.3953C25.8311 32.7639 33.6389 24.9561 43.2703 24.9561C52.9017 24.9561 60.7095 32.7639 60.7095 42.3953Z" fill="#DFE0E3"></path>
        </svg>
    `,
    searchNoResult: "К сожалению, по вашему запросу мы ничего не нашли. Попробуйте переформулировать"
};

function getLocalizedString(key) {
    return localization[key];
}