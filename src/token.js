import { playersSeeName, toggleSeeName } from './api'
import { getActorTokens, localize } from './module'

export function renderTokenHUD(hud, html) {
    const actor = hud.object.actor
    if (!actor || actor.hasPlayerOwner) return

    const toggle = createToggle(actor)
    toggle.addEventListener('click', () => toggleSeeName(actor))
    html.find('.col.right').append(toggle)
}

function createToggle(actor) {
    const tmp = document.createElement('template')
    const toggled = playersSeeName(actor)

    tmp.innerHTML = `<div class="control-icon${toggled ? ' active' : ''}" data-action="anonymous-toggle">
    <i class="fa-solid fa-signature" title="${localize('hud.title')}"></i>
</div>`

    return tmp.content.firstChild
}
