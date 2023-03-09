import Table from './DetailsTable';

const SideDetails = () => {

    return ( 
        <>
            <div className="sd-header sd-common">
                <h2>Detalji porudzbine</h2>
                <button>Izlazak iz detalja</button>
            </div>
            <div className="sd-details sd-height sd-common">
                <h3>Detalji transakcije</h3>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Porudzbina br:</div>
                    <div className="sd-details-row-right">#0001</div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Kupac:</div>
                    <div className="sd-details-row-right">Central-H</div>
                </div>
                <div className="sd-separator"></div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Datum i vreme porudzbine</div>
                    <div className="sd-details-row-right">25.02.2023 10:15</div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Adresa za isporuku:</div>
                    <div className="sd-details-row-right">11 bb Majdanpek</div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Ukupna vrednost porudzbine:</div>
                    <div className="sd-details-row-right">11.555,66 RSD</div>
                </div>
            </div>
            <div className="sd-products sd-height sd-common">
                <h3>Proizvodi</h3>
                {/* <div> */}
                    {/* <div>Naziv</div>
                    <div>Kol.</div>
                    <div>Naziv</div>
                    <div>Naziv</div> */}
                    {/* <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                    </table> */}
                {/* </div> */}
                <Table />
            </div>
        </>
     );
}
 
export default SideDetails;