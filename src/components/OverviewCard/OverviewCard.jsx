import './OverviewCard.css';
import { Link } from 'react-router-dom';
import blogs from '../../constants/data.json';

function OverviewCard({title, author, responses, shares, id}) {
    return (
        <article className="card-wrapper">
            <>
                <span><Link className="links" to={`/blogpost/${id}`}>{title}</Link></span>
                <span className="card-author"> ({author})</span>
            </>
            <p className="card-info">{responses} reacties - {shares} keer gedeeld</p>
        </article>
    )
}

export default OverviewCard;