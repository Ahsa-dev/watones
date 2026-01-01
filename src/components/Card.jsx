import '../styles/card.css';

export default function Card(props) {

    return (
        <div class="ticket">
            <div class="ticket-main">
                <div class="ticket-header">
                <div>
                    <small>NAME OF PASSENGERS</small>
                    <strong>{props.pilot}</strong>
                    <strong>{props.copilot && ' & '}{props.copilot}</strong>
                </div>
                <div>
                    <small>FLIGHT</small>
                    <strong>{props.fligth}</strong>
                </div>
                <div>
                    <small>DATE</small>
                    <strong>{props.date}</strong>
                </div>
                <div>
                    <small>Kilometers</small>
                    <strong>{props.kilometers} Km</strong>
                </div>
                </div>
                <div class="ticket-route">
                    <span class="city">{props.origin}</span>
                    <span class="plane">✈</span>
                    <span class="city">{props.destiny}</span>
                </div>
                <div class="ticket-footer">
                    <div>
                        <small>BOARDING TIME</small>
                        <strong>08:30</strong>
                    </div>
                    <div>
                        <small>GATE</small>
                        <strong>03</strong>
                    </div>
                    <div>
                        <small>TERMINAL</small>
                        <strong>2A</strong>
                    </div>
                    <div class="qr"></div>
                </div>
            </div>
            <div class="ticket-side">
                <h4>{props.title}</h4>
                <div class="side-info">
                    <strong>DESCRIPTION</strong>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}