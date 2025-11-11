///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS io.javelit:javelit:0.67.0
//DEPS tech.tablesaw:tablesaw-core:0.43.1

import java.util.List;
import java.util.Random;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import io.javelit.core.Jt;
import io.javelit.core.JtContainer;

import org.icepear.echarts.charts.line.LineSeries;
import tech.tablesaw.api.DoubleColumn;
import tech.tablesaw.api.Table;

import org.icepear.echarts.Line;

public class ChartsApp {

  public static void main(String[] args) {
    JtContainer container = Jt.container().border(true).use();
    List<String> selectedUsers = Stream.of("Alice", "Bob", "Charly")
        .filter(user -> Jt.checkbox(user).value(true).use(container))
        .toList();
    boolean rollingAverage = Jt.toggle("Rolling average").use(container);

    // generate random data
    Random rand = new Random(42);
    Table t = Table.create("data");
    for (String user : selectedUsers) {
      DoubleColumn col = DoubleColumn.create(user,
          DoubleStream.generate(rand::nextGaussian).limit(20));
      if (rollingAverage) {
        col = col.rolling(7).mean();
        col = col.where(col.isNotMissing());
      }
      col.setName(user);
      t.addColumns(col);
    }

    // prepare chart
    String[] xLabels = IntStream.range(0, t.rowCount())
        .mapToObj(String::valueOf)
        .toArray(String[]::new);
    Line chart = new Line()
        .setTooltip("axis")
        .setLegend()
        .addXAxis(xLabels)
        .addYAxis();
    for (String user : selectedUsers) {
      chart.addSeries(new LineSeries()
                   .setName(user)
                   .setData(t.doubleColumn(user).asDoubleArray()));
    }

    var tabs = Jt.tabs(List.of("Chart", "Dataframe")).use();
    Jt.echarts(chart).use(tabs.tab("Chart"));
    Jt.table(t).use(tabs.tab("Dataframe"));
  }
}
