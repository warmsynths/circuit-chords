import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/chord-input';
import type { ChordInputParsedEventDetail, ParsedChord } from './components/chord-input';

@customElement('chord-mapper-app')
class ChordMapperApp extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: 1rem;
      margin-top: 1rem;
    }

    .output {
      border: 1px solid #d7e0e6;
      border-radius: 12px;
      padding: 0.9rem;
      background: white;
    }

    .placeholder {
      margin: 0;
      color: #5f6c7b;
      font-size: 0.9rem;
    }

    ul {
      margin: 0;
      padding-left: 1rem;
      display: grid;
      gap: 0.45rem;
    }

    li {
      font-size: 0.92rem;
      line-height: 1.35;
    }

    .symbol {
      font-weight: 700;
      color: #0f766e;
    }

    .source {
      margin: 0 0 0.75rem;
      font-size: 0.85rem;
      color: #5f6c7b;
    }
  `;

  @state()
  private progression: ParsedChord[] = [];

  @state()
  private source = '';

  render() {
    return html`
      <chord-input @progression-parsed=${this.onParsed}></chord-input>

      <section class="output" aria-live="polite">
        ${this.progression.length === 0
          ? html`<p class="placeholder">Parsed chords will appear here.</p>`
          : html`
              <p class="source">Source: ${this.source}</p>
              <ul>
                ${this.progression.map(
                  (chord) => html`
                    <li>
                      <span class="symbol">${chord.symbol}</span>
                      -> notes: ${chord.notes.join(', ')}
                    </li>
                  `
                )}
              </ul>
            `}
      </section>
    `;
  }

  private onParsed(event: CustomEvent<ChordInputParsedEventDetail>) {
    this.progression = event.detail.progression;
    this.source = event.detail.source;
  }
}
