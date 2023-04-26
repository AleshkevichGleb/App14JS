export const getCookie = (name) => {
    let results = document.cookie.match ( '(^|;) ?' + name + '=([^;]*)(;|$)' );
    return results ? unescape(results[2]) : null;
} 