export function slideRight(sliderId)
{
    const slider = document.getElementById(sliderId);
    const child = slider.children[0];
    const computedStyle = window.getComputedStyle(child); 
    console.log();
    const offset = (Math.abs(computedStyle.marginRight.slice(0, computedStyle.marginRight.length - 2)) * 2) || (Math.abs(computedStyle.paddingRight.slice(0, computedStyle.paddingRight.length - 2)) * 2);
    const slideWidth = (child.offsetWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight)) + offset;
    slider.scrollBy(slideWidth, 0)
}
export function slideLeft(sliderId)
{
    const slider = document.getElementById(sliderId);
    const child = slider.children[0];
    const computedStyle = window.getComputedStyle(child); 
    console.log();
    const offset = (Math.abs(computedStyle.marginRight.slice(0, computedStyle.marginRight.length - 2)) * 2) || (Math.abs(computedStyle.paddingRight.slice(0, computedStyle.paddingRight.length - 2)) * 2);
    const slideWidth = (child.offsetWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight)) + offset;
    slider.scrollBy(-slideWidth, 0)
}